const { Types, Schema } = require('mongoose');

const model = {
    time: String,
    order : Number,
    week: Boolean,
    day: String,
    group: String,
    subgroup: String,
    name: String,
    room : String,
    teacher : String,

    lid : Types.ObjectId
}

module.exports = new Schema(model);