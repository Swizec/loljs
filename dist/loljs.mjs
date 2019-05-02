var t=require("../parser"),n=function(t,e){this._scope=[],this._next=[],this._io={visible:function(t){if(!console||"function"!=typeof console.log)throw new Error("console.log() not available");console.log.apply(console,n.utils.argsArray(arguments))},prompt:function(t,n){if("function"!=typeof prompt)throw new Error("prompt() not available");n(prompt(t))}},this._isPaused=!1,this._done=t||function(){},this._paused=e||function(){},this._currentNode=null,this._errors=[]};n.prototype._waitFor=function(t,n,e){e=e||{setIt:!1,breakOnReturn:!1},this._next.push({nodes:t.slice(0),results:[],f:n,options:e,inProgress:!1})},n.prototype._current=function(t){var n=this,e=t.nodes.shift();if(!e)return t.inProgress?void 0:(t.f(t.results),void(n._currentNode=null));t.inProgress=!0,this._evaluate(e,function(e){t.options.setIt&&n._setSymbol("IT",e),t.results.push(e),!t.nodes.length||t.options.breakOnReturn&&void 0!==n._getSpecial("return")?(t.f(t.results),n._currentNode=null):n._current(t)})},n.prototype.next=function(){if(this.errors().length)this.pause();else{this._isPaused=!1;var t=this._next.pop();t&&this._current(t)}},n.prototype.resume=function(){this._isPaused=!1,this.tick.go()},n.prototype.pause=function(t){this._isPaused=!0,t||this._paused.call(this)},n.prototype._error=function(t){this._errors.push(t),this.tick.cancel(),this.pause()},n.prototype.errors=function(){return this._errors},n.prototype.pos=function(){var t=this._currentNode._location;return{line:t.first_line-1,col:t.first_column,lineEnd:t.last_line-1,colEnd:t.last_column}},n.prototype._push=function(t){if(!t.name)throw new Error("Scope must have name");t.symbols=t.symbols||{},t.listeners=t.listeners||[],t.symbols.IT=null,this._scope.push(t)},n.prototype._pop=function(t){var n=this._scope.pop();if(!n||n.name!==t){for(var e="Couldn't pop state "+t+".\nStack:\n";n;)e+=n.name+"\n",n=this._scope.pop();throw new Error(e)}},n.prototype.getSymbol=function(t){for(var n=this._scope,e=n.length-1;e>=0;e--)if(n[e].symbols.hasOwnProperty(t))return n[e].symbols[t];throw new Error("No such symbol: "+t)},n.prototype._setSymbol=function(t,n){for(var e=this._scope,o=e.length-1;o>=0;o--)if(e[o].symbols.hasOwnProperty(t))return void(e[o].symbols[t]=n);e[e.length-1].symbols[t]=n},n.prototype._findScope=function(t){var n=this._scope;if(!t)return n[n.length-1];for(var e="string"==typeof t,o=n.length-1;o>=0;o--){if(e&&n[o].name===t)return n[o];if(!e&&t.indexOf(n[o].name)>=0)return n[o]}return null},n.prototype._findScopeForSpecial=function(t){return"return"===t?this._findScope("function"):"switch-condition"===t?this._findScope("switch"):"broken"===t?this._findScope(["switch","loop"]):this._scope[this._scope.length-1]},n.prototype._setSpecial=function(t,n){var e=this._findScopeForSpecial(t);e&&(e[t]=n)},n.prototype._getSpecial=function(t){var n=this._findScopeForSpecial(t);if(n)return n[t]},n.prototype._listen=function(t,n){this._findScope().listeners.push({event:t,action:n})},n.prototype._emit=function(t){for(var n=!1,e=this._scope.length-1;e>=0&&!n;e--)for(var o=this._scope[e],i=0;i<o.listeners.length&&!n;i++){var r=o.listeners[i];r.event===t&&r.action()&&(n=!0)}return n},n.prototype._index=function(t,n){if(!t||void 0===t.length)throw new Error("Not indexable");for(var e=n;e<0;)e+=t.length;if("string"==typeof t)return t.charAt(e);if("[object Array]"===Object.prototype.toString.call(t)){if(e<t.length)return t[e];throw new Error("Index "+n+" out of range")}throw new Error("Not indexable")},n.prototype._setIndex=function(t,n,e){if(!t||void 0===t.length)throw new Error("Not indexable");if("[object Array]"===Object.prototype.toString.call(t)){for(;e>t.length-1;)t.push(null);return t[e]=n,n}throw new Error("Not indexable")},n.prototype._evaluateLiteral=function(t,n){var e=this;"[object Array]"===Object.prototype.toString.call(t.value)?this._waitFor(t.value,function(t){n(t)}):n("string"==typeof t.value?t.value.replace(/:\{([\w_]+)\}/g,function(t,n){var o=n,i=t;try{i=e.getSymbol(o)}catch(t){e._error("No such symbol: "+o)}return i}):t.value)},n.prototype._evaluateIndexer=function(t,n){var e=this;this._waitFor([t.lhs,t.rhs],function(t){var o=e._index(t[0],t[1]);n(o)})},n.prototype._evaluateFunctionCall=function(t,n){var e=this;this._waitFor(t.args.values,function(o){var i;try{if("function"!=typeof(i=e.getSymbol(t.name)))throw new Error(t.name+" is not a function")}catch(t){return void e._error(""+t)}e._callFunction(i,o,n)})},n.prototype._evaluateBody=function(t,n){this._waitFor(t.lines,function(t){var e=t[t.length-1];void 0===e&&(e=null),n(e)},{setIt:!0,breakOnReturn:!0})},n.prototype._evaluateIdentifier=function(t,n){var e;try{e=this.getSymbol(t.name)}catch(t){return void this._error(""+t)}"function"!=typeof e?n(e):this._callFunction(e,[],n)},n.prototype._evaluateAssignmentIndex=function(t,n,e){var o=this;this._waitFor([t.name.lhs,t.name.rhs,t.value],function(t){var n=t[2];o._setIndex(t[0],n,t[1]),e(n)})},n.prototype._evaluateAssignmentNormal=function(t,n,e){this._setSymbol(t.name,n),e(n)},n.prototype._evaluateAssignment=function(t,n){var e=this;this._waitFor([t.value],function(o){var i=o[0];"Indexer"===t.name._name?e._evaluateAssignmentIndex(t,i,n):e._evaluateAssignmentNormal(t,i,n)})},n.prototype.evaluate=function(t,n){var e=this;this._waitFor([t.value],function(o){e._setSymbol(t.name,o[0]),n(o[0])})},n.prototype._evaluateDeclaration=function(t,n){var e=this;t.value?this._waitFor([t.value],function(o){e._setSymbol(t.name,o[0]),n(o[0])}):(e._setSymbol(t.name,null),n(null))},n.prototype._evaluateIf=function(t,n){var e=this,o=t.condition,i=t.elseIfs.slice(0),r=function(t){var n=i.shift();n?e._waitFor([n.condition],function(o){o[0]?e._waitFor([n.body],function(n){t(!0)}):r(t)}):t(!1)};!function(t){o?e._waitFor([o],t):t(e.getSymbol("IT"))}(function(o){o?function(n){e._waitFor([t.body],function(){n(null)})}(n):r(function(o){!o&&t.elseBody?e._waitFor([t.elseBody],n):n(null)})})},n.prototype._evaluateNoOp=function(t,n){n(null)},n.prototype._evaluateLoopCondition=function(t,n){t?this._waitFor([t.expression],function(e){n("while"===t.check?e[0]:!e[0])}):n(!0)},n.prototype._evaluateLoop=function(t,n){var e=this;if(t.op)try{this.getSymbol(t.op.symbol)}catch(n){this._setSymbol(t.op.symbol,0)}e._push({name:"loop"}),e._setSpecial("broken",!1);var o=function(){e._pop("loop"),n(null)},i=function(){e._waitFor([t.condition],function(n){var r,s=e._getSpecial("broken");null!==t.condition&&!n[0]||s?o():(r=function(){!function(){if(t.op){var n=e.getSymbol(t.op.symbol);n=t.op.command=n+1,e._setSymbol(t.op.symbol,n)}}(),i()},e._waitFor([t.body],r))})};this._listen("break",function(){return o(),!0}),i()},n.prototype._callFunction=function(t,n,e){var o=this;if(this._push({name:"function",symbol:t}),!t._data||t._data.builtIn){var i=t.apply(o,n);return this._pop("function"),void e(i)}for(var r=0;r<t._data.args.length;r++)this._setSymbol(t._data.args[r],void 0===n[r]?null:n[r]);t.call(o,function(t){o._pop("function"),e(t)})},n.prototype._evaluateFunctionDefinition=function(t,n){var e=function(n){var e=this;this._waitFor([t.body],function(t){var o=e._getSpecial("return");void 0===o&&(o=e.getSymbol("IT")),void 0===o&&(o=null),n(o)})};e._data={builtIn:!1,args:t.args.slice(0),name:t.name},this._setSymbol(t.name,e,{setIt:!0}),n(null)},n.prototype._evaluateCast=function(t,e){this._waitFor([t.expression],function(o){var i=o[0],r=t.type.toUpperCase();if("TROOF"===r)i=!!i;else if("NOOB"===r)i=null;else if("YARN"===r)i=n.utils.toYarn(i);else{if("NUMBR"!==r&&"NUMBAR"!==r)throw new Error("Unrecognised type: "+r);i=Number(i)}e(i)})},n.prototype._evaluateVisible=function(t,e){var o=this;this._waitFor([t.expression],function(t){o._io.visible(n.utils.toYarn(t[0])),e(t[0])})},n.prototype._evaluateGimmeh=function(t,n){var e=this;this._io.prompt("",function(o){e._setSymbol(t.variable,o),n(o)})},n.prototype._evaluateReturn=function(t,n){var e=this;this._waitFor([t.expression],function(t){e._setSpecial("return",t[0]),n(t[0])})},n.prototype._evaluateSwitch=function(t,e){var o=this,i=o.getSymbol("IT");this._push({name:"switch","switch-condition":i,broken:!1});var r=t.branches.slice(0);r.reverse();var s=!1;function a(){o._pop("switch"),e()}function u(){var t=r.pop();t&&!o._getSpecial("broken")?"CaseDefault"===t._name||s?l(t):o._waitFor([t.condition],function(e){n.builtIns["BOTH SAEM"](e[0],i)?l(t):u()}):a()}function l(t){o._waitFor([t.body],function(t){s=!o._getSpecial("broken"),u()})}this._listen("break",function(){return a(),!0}),u()},n.prototype._evaluateBreak=function(t,n){this._setSpecial("broken",!0),this._emit("break")||n()},n.prototype._evaluateBreakpoint=function(t,n){this.pause(),n()},n.prototype._evaluate=function(t,n){this._currentNode=t;var e={Assignment:this._evaluateAssignment,Break:this._evaluateBreak,Breakpoint:this._evaluateBreakpoint,Body:this._evaluateBody,Cast:this._evaluateCast,Declaration:this._evaluateDeclaration,FunctionCall:this._evaluateFunctionCall,FunctionDefinition:this._evaluateFunctionDefinition,Gimmeh:this._evaluateGimmeh,Identifier:this._evaluateIdentifier,If:this._evaluateIf,Indexer:this._evaluateIndexer,Literal:this._evaluateLiteral,Loop:this._evaluateLoop,LoopCondition:this._evaluateLoopCondition,NoOp:this._evaluateNoOp,Return:this._evaluateReturn,Switch:this._evaluateSwitch,Visible:this._evaluateVisible}[t._name];if(!e)throw new Error("Not implemented: "+t._name);e.call(this,t,n)},n.prototype._pushProgramState=function(){var t={};for(var e in n.builtIns)n.builtIns.hasOwnProperty(e)&&(t[e]=n.builtIns[e]);this._push({name:"program",symbols:t})},n.prototype._reset=function(){this._scope.length=0,this._next.length=0,this._pushProgramState(),this._errors.length=0,this._isPaused=!1,this._currentNode=null},n.prototype.evaluateWatchExpression=function(t,e,o){var i=new n(e,o);i._io=this._io,i._scope=this._scope.map(function(t){return function(t){var n={};for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}(t)}),i._scope.length||i._pushProgramState(),i.evaluate(t,!0)},n.prototype.evaluate=function(t,e){var o=this;e||this._reset();var i=!1;this._evaluate(t,function(t){i=!0,o._done.call(o,t)}),this.tick&&this.tick.cancel(),this.tick={_cancel:!1,_isRunning:!1,cancel:function(){this._cancel=!0},_go:function(){var t=this;if(this._cancel||o._isPaused)this._isRunning=!1;else{this._isRunning=!0;for(var e=+new Date;!i&&+new Date-e<200&&!o._isPaused;)o.next();i?this._isRunning=!1:n.utils.nextTick(function(){t._go()})}},go:function(){this._isRunning||this._go()}},this.tick.go()},n.prototype.setIo=function(t){"function"==typeof t.visible&&(this._io.visible=t.visible),"function"==typeof t.prompt&&(this._io.prompt=t.prompt)},n.utils={toYarn:function(t){if(!0===t)return"WIN";if(!1===t)return"FAIL";if(null===t)return"NOOB";if("[object Array]"===Object.prototype.toString.call(t)){for(var e="[",o=0;o<t.length;o++)e+=n.utils.toYarn(t[o]),o!==t.length-1&&(e+=", ");return e+"]"}return""+t}},n.utils.argsArray=function(t){return Array.prototype.slice.call(t)},n.builtIns={NOT:function(t){return!t},"ANY OF":function(t){for(var e=n.utils.argsArray(arguments),o=0;o<e.length;o++)if(e[o])return!0;return!1},"BIGGR OF":function(t,n){return Math.max(t,n)},"SMALLR OF":function(t,n){return Math.min(t,n)},"SUM OF":function(t,n){return t+n},"DIFF OF":function(t,n){return t-n},"PRODUKT OF":function(t,n){return t*n},"QUOSHUNT OF":function(t,n){return t/n},"BOTH OF":function(t,n){return t&&n},"EITHER OF":function(t,n){return t||n},"BOTH SAEM":function(t,n){return t===n},SMOOSH:function(t){var e=n.utils.argsArray(arguments);return n.utils.toYarn(e.reduce(function(t,e){return n.utils.toYarn(t)+n.utils.toYarn(e)}))},"BIGGR THAN":function(t,n){return t>n},"SMALLR THAN":function(t,n){return t<n},"MOD OF":function(t,n){return t%n},"LEN OF":function(t){return t&&void 0!==t.length?t.length:null},"ORD OF":function(t){return t&&t.charCodeAt?t.charCodeAt(0):-1},"CHR OF":function(t){return String.fromCharCode(t)}},module.exports={lol:n,parser:t};
//# sourceMappingURL=loljs.mjs.map
