const { Types, Schema } = require('mongoose');

const model = {
    cid : Types.ObjectId,
    attachments : [Types.ObjectId],
    owner : Types.ObjectId,
    text : String,
    date : { type : Number, default : Date.now },
    comments : [Types.ObjectId],
    marks : Number,
    emotions : [{
        mem : String,
        count : Number
    }]
}

module.exports = new Schema(model);