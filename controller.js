const OPERATIONS = require("./operations");

function operations(PARSED_PARAMS) {

    map = {

        "+": OPERATIONS.add(PARSED_PARAMS.a, PARSED_PARAMS.b),
        "-": OPERATIONS.substract(PARSED_PARAMS.a, PARSED_PARAMS.b),
        "*": OPERATIONS.multiply(PARSED_PARAMS.a, PARSED_PARAMS.b),
        "/": OPERATIONS.divide(PARSED_PARAMS.a, PARSED_PARAMS.b)
    }

    const OPERATOR = PARSED_PARAMS.op;
    const RESULT = map[OPERATOR];

    return RESULT;
}

exports.processParams = (params) => {
   
    let result;
    
    const REG_EXP = /[+\-\/\*]/;
    const PARSED_PARAMS = {};

    const OPERATOR = params.search(REG_EXP);
    const SPLITTED_PARAMS = params.split(REG_EXP);    
    const operador = params[OPERATOR];

    PARSED_PARAMS.a = parseInt(SPLITTED_PARAMS[0]);
    PARSED_PARAMS.op = operador;
    PARSED_PARAMS.b = parseInt(SPLITTED_PARAMS[1]);
    
    result = operations(PARSED_PARAMS);

    OPERATIONS.updateHistory({

        "Operation": PARSED_PARAMS.op,
        "TermA": PARSED_PARAMS.a,
        "TermB": PARSED_PARAMS.b,
        "Result": result 
    });
    
    return result;
}

exports.showHistory = () => OPERATIONS.showHistory();
exports.clearHistory = () => OPERATIONS.clearHistory();
