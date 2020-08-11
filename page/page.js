const pug = require('pug');
const yaml = require('yaml');
const fs = require('fs');
const { avg } = require('../utils/logger');
const path = require('path');

module.exports = function(req,res) {

    let file = fs.readFileSync(path.resolve(__dirname, 'doc.yml'), 'utf8');
    let data = yaml.parse(file);

    let model = [];
    for(let sheet of data.data)
    {
        let arr = [];
        for(let line of sheet.content)
        {
            let done = false;
            let tokens = line.path.split(' ');

            let params = [];

            if(!line.m)
                line.m = [];

            for(let p of line.m)
            {
                let apis = {};

                let parts = p.split('|');
                parts[0] = parts[0].trim();
                if(parts[1])
                {
                    apis.desc = parts[1].trim();
                }
                
                let atoms = parts[0].split(' ');
                apis.param = atoms[0].trim();
                apis.type = atoms[1].trim();

                if(apis.param[0] == '+')
                {
                    apis.param = apis.param.substr(1);
                    apis.required = true;
                }
                else
                {
                    apis.required = false;
                }

                params.push(apis);

            }

            if(tokens.length === 3) done = true;
            arr.push({
                done : done,
                type : tokens[0],
                name : tokens[1],
                avg : avg(tokens[1]),
                params : params,
                desc : line.desc
            });
        }
        model.push({
            name : sheet.name,
            content : arr
        })
    }

    let a = req.user ? true : false; //FIXME: 
    res.send(pug.renderFile(path.resolve(__dirname, 'hi.pug'), { m : model, a : a}));
};