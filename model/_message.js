const { Types, Schema } = require('mongoose');

const model = {
    cid : { type : Types.ObjectId, ref : 'conversation'},
    attachments : {type : [Types.ObjectId], ref : 'attachment'},
    owner : { type : Types.ObjectId, ref : 'user'},
    text : String,
    date : { type : Number, default : Date.now },
    comments : { type : [Types.ObjectId], ref : 'message'},
    marks : Number,
    emotions : [{
        mem : String,
        owner : { type : Types.ObjectId }
    }]
}

module.exports = new Schema(model);