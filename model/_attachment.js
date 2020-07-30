const { Types, Schema } = require('mongoose');

const types = {
    doc : 0,
    pdf : 1,
    image : 2,
    file : 3,
    audio : 4,
    video : 5,
}

const model = {
    name : String,
    url : String,
    size : Number,
    type : Number,
    owner : Types.ObjectId
};

module.exports = new Schema(model);