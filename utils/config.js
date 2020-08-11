const fs = require('fs');
const yaml = require('yaml');
const path = require('path');

let config = {};

function read()
{
    //Error if not exist

    let str = fs.readFileSync(path.resolve(__dirname,'..','config.yaml'),'utf8');
    config = yaml.parse(str);
}

read();

module.exports = config;