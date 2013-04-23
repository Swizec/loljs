/* parser generated by jison 0.4.4 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"body":4,"HAI":5,"KTHXBYE":6,"eol":7,"NEWLINE":8,"COMMA":9,"EOF":10,"arg_end":11,"MKAY":12,"arg_list":13,"simple_exp":14,"SEP":15,"function_call":16,"IDENTIFIER":17,"function_def_arg_list":18,"YR":19,"function_def":20,"HOW_DUZ_I":21,"IF_U_SAY_SO":22,"SUM_OF":23,"DIFF_OF":24,"BOTH_SAEM":25,"R":26,"NUMBER":27,"YARN":28,"TROOF":29,"NOOB":30,"(":31,")":32,"var_dec":33,"VAR_DEC":34,"ITS":35,"conditional":36,"O_RLY":37,"YA_RLY":38,"MEBBE":39,"NO_WAI":40,"OIC":41,"line":42,"$accept":0,"$end":1},
terminals_: {2:"error",5:"HAI",6:"KTHXBYE",8:"NEWLINE",9:"COMMA",10:"EOF",12:"MKAY",15:"SEP",17:"IDENTIFIER",19:"YR",21:"HOW_DUZ_I",22:"IF_U_SAY_SO",23:"SUM_OF",24:"DIFF_OF",25:"BOTH_SAEM",26:"R",27:"NUMBER",28:"YARN",29:"TROOF",30:"NOOB",31:"(",32:")",34:"VAR_DEC",35:"ITS",37:"O_RLY",38:"YA_RLY",39:"MEBBE",40:"NO_WAI",41:"OIC"},
productions_: [0,[3,1],[3,4],[7,1],[7,1],[7,1],[11,1],[11,1],[13,1],[13,3],[16,3],[18,2],[18,4],[18,0],[20,6],[14,4],[14,4],[14,4],[14,3],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,3],[33,4],[33,2],[36,5],[36,5],[36,4],[36,2],[4,2],[4,3],[42,1],[42,1],[42,1],[42,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:  return $$[$0]; 
break;
case 2:  return $$[$0-2]; 
break;
case 3: this.$ = $$[$0] 
break;
case 4: this.$ = $$[$0] 
break;
case 5: this.$ = $$[$0] 
break;
case 6: this.$ = $$[$0]; 
break;
case 7:this.$ = $$[$0];
break;
case 8: this.$ = new ast.ArgList([$$[$0]]); 
break;
case 9:
            $$[$0-2].push($$[$0]);
            this.$ = $$[$0-2]
        
break;
case 10: this.$ = new ast.FunctionCall($$[$0-2], $$[$0-1]); 
break;
case 11: this.$ = [$$[$0]]; 
break;
case 12: $$[$0-3].push($$[$0]); this.$ = $$[$0-3]; 
break;
case 13:this.$ = []; 
break;
case 14: this.$ = new ast.FunctionDefinition($$[$0-4], $$[$0-3], $$[$0-1]); 
break;
case 15:
            var args = new ast.ArgList([$$[$0-2], $$[$0]]);
            this.$ = new ast.FunctionCall('SUM OF', args);
        
break;
case 16:
            var args =  new ast.ArgList([$$[$0-2], $$[$0]]);
            this.$ = new ast.FunctionCall('DIFF OF', args);
        
break;
case 17:
            var args = new ast.ArgList([$$[$0-2], $$[$0]]);
            this.$ = new ast.FunctionCall('BOTH SAEM', args);
        
break;
case 18: this.$ = new ast.Assignment($$[$0-2], $$[$0]); 
break;
case 19: this.$ = $$[$0]; 
break;
case 20: this.$ = new ast.Number($$[$0]);  
break;
case 21:  this.$ = new ast.Yarn($$[$0]);  
break;
case 22: this.$ = new ast.Troof($$[$0].toLowerCase() === 'win');
break;
case 23: this.$ = new ast.Noob(); 
break;
case 24: this.$ = new ast.Identifier($$[$0]); 
break;
case 25: this.$ = $$[$0-1] 
break;
case 26:
            this.$ = new ast.Declaration($$[$0-2], $$[$0])
        
break;
case 27: this.$ = new ast.Declaration($$[$0]); 
break;
case 28: this.$ = new ast.If($$[$0]); 
break;
case 29:
            var elseIf = new ast.If($$[$0]);
            elseIf.condition = $$[$0-2];
            $$[$0-4].elseIfs.push(elseIf);
            this.$ = $$[$0-4];
        
break;
case 30: $$[$0-3].elseBody = $$[$0]; this.$ = $$[$0-3]; 
break;
case 31: this.$ = $$[$0-1]; 
break;
case 32:
            this.$ = new ast.Body();
            this.$.push($$[$0-1]);
        
break;
case 33:
            $$[$0-2].push($$[$0-1]);
            this.$ = $$[$0-2];
        
break;
case 34:
            this.$ = $$[$0];
        
break;
case 35:
            this.$ = $$[$0];
        
break;
case 36: this.$ = $$[$0]; 
break;
case 37: this.$ = $$[$0]; 
break;
}
},
table: [{3:1,4:2,5:[1,3],14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],42:4},{1:[3]},{1:[2,1],14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],42:22},{4:23,14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],42:4},{7:24,8:[1,25],9:[1,26],10:[1,27]},{8:[2,34],9:[2,34],10:[2,34]},{8:[2,35],9:[2,35],10:[2,35]},{8:[2,36],9:[2,36],10:[2,36],39:[1,28],40:[1,29],41:[1,30]},{8:[2,37],9:[2,37],10:[2,37]},{17:[1,31]},{14:32,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{14:33,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{14:34,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{8:[2,24],9:[2,24],10:[2,24],12:[2,24],13:36,14:37,15:[2,24],16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],26:[1,35],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],32:[2,24]},{8:[2,19],9:[2,19],10:[2,19],12:[2,19],15:[2,19],32:[2,19]},{8:[2,20],9:[2,20],10:[2,20],12:[2,20],15:[2,20],32:[2,20]},{8:[2,21],9:[2,21],10:[2,21],12:[2,21],15:[2,21],32:[2,21]},{8:[2,22],9:[2,22],10:[2,22],12:[2,22],15:[2,22],32:[2,22]},{8:[2,23],9:[2,23],10:[2,23],12:[2,23],15:[2,23],32:[2,23]},{14:38,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{7:39,8:[1,25],9:[1,26],10:[1,27]},{17:[1,40]},{7:41,8:[1,25],9:[1,26],10:[1,27]},{6:[1,42],14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],42:22},{1:[2,32],6:[2,32],8:[2,32],9:[2,32],10:[2,32],17:[2,32],21:[2,32],22:[2,32],23:[2,32],24:[2,32],25:[2,32],27:[2,32],28:[2,32],29:[2,32],30:[2,32],31:[2,32],34:[2,32],37:[2,32],39:[2,32],40:[2,32],41:[2,32]},{1:[2,3],6:[2,3],8:[2,3],9:[2,3],10:[2,3],12:[2,3],15:[2,3],17:[2,3],21:[2,3],22:[2,3],23:[2,3],24:[2,3],25:[2,3],27:[2,3],28:[2,3],29:[2,3],30:[2,3],31:[2,3],32:[2,3],34:[2,3],37:[2,3],38:[2,3],39:[2,3],40:[2,3],41:[2,3]},{1:[2,4],6:[2,4],8:[2,4],9:[2,4],10:[2,4],12:[2,4],15:[2,4],17:[2,4],21:[2,4],22:[2,4],23:[2,4],24:[2,4],25:[2,4],27:[2,4],28:[2,4],29:[2,4],30:[2,4],31:[2,4],32:[2,4],34:[2,4],37:[2,4],38:[2,4],39:[2,4],40:[2,4],41:[2,4]},{1:[2,5],6:[2,5],8:[2,5],9:[2,5],10:[2,5],12:[2,5],15:[2,5],17:[2,5],21:[2,5],22:[2,5],23:[2,5],24:[2,5],25:[2,5],27:[2,5],28:[2,5],29:[2,5],30:[2,5],31:[2,5],32:[2,5],34:[2,5],37:[2,5],38:[2,5],39:[2,5],40:[2,5],41:[2,5]},{14:43,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{7:44,8:[1,25],9:[1,26],10:[1,27]},{8:[2,31],9:[2,31],10:[2,31],39:[2,31],40:[2,31],41:[2,31]},{8:[2,27],9:[2,27],10:[2,27],35:[1,45]},{15:[1,46]},{15:[1,47]},{15:[1,48]},{14:49,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{7:52,8:[1,25],9:[1,26],10:[1,27],11:50,12:[1,53],15:[1,51]},{8:[2,8],9:[2,8],10:[2,8],12:[2,8],15:[2,8]},{32:[1,54]},{38:[1,55]},{8:[2,13],9:[2,13],10:[2,13],15:[2,13],18:56,19:[1,57]},{1:[2,33],6:[2,33],8:[2,33],9:[2,33],10:[2,33],17:[2,33],21:[2,33],22:[2,33],23:[2,33],24:[2,33],25:[2,33],27:[2,33],28:[2,33],29:[2,33],30:[2,33],31:[2,33],34:[2,33],37:[2,33],39:[2,33],40:[2,33],41:[2,33]},{7:58,8:[1,25],9:[1,26],10:[1,27]},{7:59,8:[1,25],9:[1,26],10:[1,27]},{4:60,14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],42:4},{14:61,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{14:62,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{14:63,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{14:64,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{8:[2,18],9:[2,18],10:[2,18],12:[2,18],15:[2,18],32:[2,18]},{8:[2,10],9:[2,10],10:[2,10],12:[2,10],15:[2,10],32:[2,10]},{14:65,16:14,17:[1,13],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19]},{8:[2,6],9:[2,6],10:[2,6],12:[2,6],15:[2,6],32:[2,6]},{8:[2,7],9:[2,7],10:[2,7],12:[2,7],15:[2,7],32:[2,7]},{8:[2,25],9:[2,25],10:[2,25],12:[2,25],15:[2,25],32:[2,25]},{7:66,8:[1,25],9:[1,26],10:[1,27]},{7:67,8:[1,25],9:[1,26],10:[1,27],15:[1,68]},{17:[1,69]},{1:[2,2]},{4:70,14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],42:4},{8:[2,30],9:[2,30],10:[2,30],14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],39:[2,30],40:[2,30],41:[2,30],42:22},{8:[2,26],9:[2,26],10:[2,26]},{8:[2,15],9:[2,15],10:[2,15],12:[2,15],15:[2,15],32:[2,15]},{8:[2,16],9:[2,16],10:[2,16],12:[2,16],15:[2,16],32:[2,16]},{8:[2,17],9:[2,17],10:[2,17],12:[2,17],15:[2,17],32:[2,17]},{8:[2,9],9:[2,9],10:[2,9],12:[2,9],15:[2,9]},{4:71,14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],42:4},{4:72,14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],42:4},{19:[1,73]},{8:[2,11],9:[2,11],10:[2,11],15:[2,11]},{8:[2,29],9:[2,29],10:[2,29],14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],39:[2,29],40:[2,29],41:[2,29],42:22},{8:[2,28],9:[2,28],10:[2,28],14:6,16:14,17:[1,13],20:8,21:[1,21],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],39:[2,28],40:[2,28],41:[2,28],42:22},{14:6,16:14,17:[1,13],20:8,21:[1,21],22:[1,74],23:[1,10],24:[1,11],25:[1,12],27:[1,15],28:[1,16],29:[1,17],30:[1,18],31:[1,19],33:5,34:[1,9],36:7,37:[1,20],42:22},{17:[1,75]},{8:[2,14],9:[2,14],10:[2,14]},{8:[2,12],9:[2,12],10:[2,12],15:[2,12]}],
defaultActions: {58:[2,2]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
undefined/* generated by jison-lex 0.2.0 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            if (this.options.backtrack_lexer) {
                delete backup;
            }
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        if (this.options.backtrack_lexer) {
            delete backup;
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comment */
break;
case 1:return "NEWLINE"
break;
case 2:return "COMMA"
break;
case 3:/* skip whitespace */
break;
case 4:return "NUMBER"
break;
case 5:return "YARN"
break;
case 6:return "YARN"
break;
case 7:return "TROOF"
break;
case 8:return "TROOF"
break;
case 9:return "NOOB"
break;
case 10:return "HAI"
break;
case 11:return "KTHXBYE"
break;
case 12:return "ITS"
break;
case 13:return "VAR_DEC"
break;
case 14:return "SUM_OF"
break;
case 15:return "DIFF_OF"
break;
case 16:return "PRODUKT_OF"
break;
case 17:return "QUOSHUNT_OF"
break;
case 18:return "MOD_OF"
break;
case 19:return "BIGGR_OF"
break;
case 20:return "SMALLR_OF"
break;
case 21:return "BOTH_SAEM"
break;
case 22:return "DIFFRINT"
break;
case 23:return "BOTH_OF"
break;
case 24:return "EITHER_OF"
break;
case 25:return "WON_OF"
break;
case 26:return "NOT"
break;
case 27:return "IDENTIFIER"
break;
case 28:return "IDENTIFIER"
break;
case 29:return "SMOOSH"
break;
case 30:return "SEP"
break;
case 31:return "MKAY"
break;
case 32:return "R"
break;
case 33:return "O_RLY"
break;
case 34:return "YA_RLY"
break;
case 35:return "MEBBE"
break;
case 36:return "OIC"
break;
case 37:return "NO_WAI"
break;
case 38:return "HOW_DUZ_I"
break;
case 39:return "YR"
break;
case 40:return "IF_U_SAY_SO"
break;
case 41:return "IDENTIFIER"
break;
case 42:return "("
break;
case 43:return ")"
break;
case 44:return "EOF"
break;
case 45:return "INVALID"
break;
}
},
rules: [/^(?:BTW.*)/i,/^(?:(\r?\n)+)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:"([^\"]*)")/i,/^(?:'([^\']*)')/i,/^(?:WIN\b)/i,/^(?:FAIL\b)/i,/^(?:NOOB\b)/i,/^(?:HAI\b)/i,/^(?:KTHXBYE\b)/i,/^(?:IT[SZ])/i,/^(?:I\s+HAS\s+A\b)/i,/^(?:SUM\s+OF\b)/i,/^(?:DIFF\s+OF\b)/i,/^(?:PRODUKT\s+OF\b)/i,/^(?:QUOSHUNT\s+OF\b)/i,/^(?:MOD\s+OF\b)/i,/^(?:BIGGR\s+OF\b)/i,/^(?:SMALLR\s+OF\b)/i,/^(?:BOTH\s+SAEM\b)/i,/^(?:DIFFRINT\b)/i,/^(?:BOTH\s+OF\b)/i,/^(?:EITHER\s+OF\b)/i,/^(?:WON\s+OF\b)/i,/^(?:NOT\b)/i,/^(?:ALL\s+OF\b)/i,/^(?:ANY\s+OF\b)/i,/^(?:SMOOSH\b)/i,/^(?:AN\b)/i,/^(?:MKAY\b)/i,/^(?:\bR\b)/i,/^(?:O\s+RLY\s*\?)/i,/^(?:YA\s+RLY\b)/i,/^(?:MEBBE\b)/i,/^(?:OIC\b)/i,/^(?:NO\s+WAI\b)/i,/^(?:HOW\s+DUZ\s+I\b)/i,/^(?:YR\b)/i,/^(?:IF\s+U\s+SAY\s+SO\b)/i,/^(?:[a-zA-Z_]+[a-zA-Z_0-9]*)/i,/^(?:\()/i,/^(?:\))/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}