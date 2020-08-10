const { Types, Schema } = require('mongoose');

const model = {
    lid : Types.ObjectId,
    attachments : { type : [Types.ObjectId],ref : 'attachment' },
    users : { type : [Types.ObjectId], ref: 'user' }
}

module.exports = new Schema(model);