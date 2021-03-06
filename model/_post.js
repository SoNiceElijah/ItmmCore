const { Types, Schema } = require('mongoose');

const model = {

    author : Types.ObjectId,
    name : String,
    content : String,
    url : String,
    date : { type : Number, default : Date.now },
    
    views : Number,
    emotions : [{
        mem : String,
        count : Number
    }]

}

module.exports = new Schema(model);