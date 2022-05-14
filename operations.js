const FS = require("fs");

// OPERATIONS

exports.add = (a, b) => a + b;

exports.substract = (a, b) => a - b;

exports.multiply = (a, b) => a * b;

exports.divide = (a, b) => a / b;

// JSON DATA BASE 

function getHistory() {

    const HISTORY = FS.readFileSync(__dirname + "/history.json");
    const HISTORY_JSON = JSON.parse(HISTORY.toString());

    return HISTORY_JSON;
}

exports.showHistory = () => {

    const HISTORY_JSON = getHistory();

    return HISTORY_JSON;
}

exports.updateHistory = (updatedData) => {

    const HISTORY = getHistory();
    const COLLECTION_LENGTH = HISTORY.length - 1;

    let idCounter = HISTORY[COLLECTION_LENGTH].ID;
    
    HISTORY[idCounter++] = {

        "ID": idCounter++,
        "Operation": updatedData.Operation,
        "TermA": updatedData.TermA,
        "TermB": updatedData.TermB,
        "Result": updatedData.Result
    }

    FS.writeFileSync("./history.json", JSON.stringify(HISTORY));
}

exports.clearHistory = () => {

    const HISTORY = [
                        {
                            "ID": 0
                        }
                    ];

    FS.writeFileSync("./history.json", JSON.stringify(HISTORY));
}