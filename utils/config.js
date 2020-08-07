const fs = require('fs');

let config = {};

function read()
{
    //Error if not exist

    let str = fs.readFileSync(__dirname + '\\..\\.config','utf8');

    let lines = str.split('\n');
    for(let line of lines)
    {
        let tokens = line.split('=');
        let prop = tokens[0].trim();
        let value = tokens[1].trim();

        config[prop] = value;
    }  
}

read();

module.exports = config;