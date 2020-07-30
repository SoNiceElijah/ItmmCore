
const Schema = require('validate');
const { Types } = require('mongoose');

module.exports = function (obj) {
    const sch = {};
    for(let prop in obj)
    {
        let key;
        let value;
        if(prop.length > 0 && prop[0] === '$')
        {
            key = prop.substr(1);
            value = {
                type : obj[prop],
                required : true
            };
        }
        else
        {
            key = prop;
            value = {
                type : obj[prop],
                required : false
            };
        }

        if(key.length > 2 && prop.substr(prop.length - 2) === 'id')
        {
            value.length = 24;
        }

        sch[key] = value;
    }

    

    let validator = new Schema(sch);


    return (req, res, next) => {
        let errors = validator.validate(req.body);
        if(errors.length > 0) {
            res.status(400).json({ error : errors.map(e => e.message).join('\n')});
        }
        else {
            for(let prop in req.body)
            {
                if(prop.length > 2 && prop.substr(prop.length - 2) === 'id')
                {
                    req.body[prop] = Types.ObjectId(req.body[prop]);
                }
            }

            next();
        }
    }
}