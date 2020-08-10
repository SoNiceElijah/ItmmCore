const { Types, Schema } = require('mongoose');

const model = {
    name : String,
    url : String,
    size : Number,
    type : Number,
    extension : String,
    owner : Types.ObjectId
};

module.exports = new Schema(model);