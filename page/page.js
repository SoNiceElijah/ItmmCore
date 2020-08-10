const pug = require('pug');
const yaml = require('yaml');
const fs = require('fs');
const { avg } = require('../utils/logger');

module.exports = function(req,res) {

    let file = fs.readFileSync(__dirname + '\\doc.yml', 'utf8');
    let data = yaml.parse(file);

    let model = [];
    for(let sheet of data.data)
    {
        let arr = [];
        for(let line of sheet.content)
        {
            let done = false;
            let tokens = line.split(' ');
            if(tokens.length === 3) done = true;
            arr.push({
                done : done,
                type : tokens[0],
                name : tokens[1],
                avg : avg(tokens[1])
            });
        }
        model.push({
            name : sheet.name,
            content : arr
        })
    }

    res.send(pug.renderFile(__dirname + '\\hi.pug', { m : model}));
};