const { Types, Schema } = require('mongoose');

const model = {
    lid : Types.ObjectId,
    attachments : [Types.ObjectId],
    users : [Types.ObjectId]
}

module.exports = new Schema(model);