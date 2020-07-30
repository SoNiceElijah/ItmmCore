const { Types, Schema } = require('mongoose');

const model = {
  
    name : String,
    description : String,
    cid : Types.ObjectId,

    rooms : [String],
    teachers : [String],

    hours : [Number],
    date : { type : Number, default : Date.now }
  
}

module.exports = new Schema(model);