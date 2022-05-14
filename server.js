const HTTP = require("http");
const CONTROLLER = require("./controller");

const PORT = 7200;

const APP = HTTP.createServer((req, res) => {

    let dataTemp,
        calculationResult,
        finalResult;

    if(req.method == 'GET') {               //METHOD GET

        if(req.url == '/') {
            
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end(`Please, write the calculation that you want to perform and POST it on text format. For example: 25+63, 54/2, 900*30, 1936-450, ...`);

        } else if(req.url == '/history') {

            const HISTORY = JSON.stringify(CONTROLLER.showHistory());
            
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(HISTORY);

        } else {

            res.writeHead(404);
            res.end("404 PAGE NOT FOUND. Please enter '/' to go to the calculator or to '/history' to watch the full history.");
        }

    } else if(req.method == 'POST') {       //METHOD POST

        if(req.url == '/') {

            req
            .on('data', (data) => {

                const REG_EXP = new RegExp(/[0-9][+\-\/\*][0-9]/); 

                dataTemp = data.toString();

                if(REG_EXP.test(dataTemp)){

                    calculationResult = CONTROLLER.processParams(dataTemp);

                    finalResult = `${dataTemp} = ${calculationResult}`;
                    
                } else if(dataTemp == 'clear all'){

                    CONTROLLER.clearHistory();
                    finalResult = "The history has been erased."

                } else {
                    
                    finalResult = "ERROR. Please enter the calculation in the correct form: 25+63, 54/2, 900*30, 1936-450";
                }

            })
            .on('end', () => {

                res.end(finalResult);
            });

        } else {

            res.writeHead(404);
            res.end("404 PAGE NOT FOUND. Please enter '/' to go to the calculator or to '/history' to watch the full history.");
        }
    }
});

APP.listen(PORT);

console.log(`Server is running on port ${PORT}`);