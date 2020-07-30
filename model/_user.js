const { Types, Schema } = require('mongoose');

const Roles = {
    stranger : 0,
    user : 1,
    advanced : 2,
    admin : 10 
};

const model = {
    
    login : String,
    username : String,
    hash : String,
    salt : String,
    vk : String,
    tag : { type : Number, default : () =>  Math.floor((Math.random() * 100000)) % 10000 },

    group : String,
    sub : String,

    level : Number,

    role : { type : Number, default : 1 },
    
    date : { type : Number, default : Date.now },
}

module.exports = new Schema(model, {
    toJSON : {
        transform : function(doc,ret) {
            delete ret.hash;
            delete ret.salt;
            delete ret.role;
            delete ret.vk;
            delete ret.__v;
        }
    }
});