const mongoose = require('mongoose');
const conversation = require('../model/_conversation');

module.exports = mongoose.model('conversation',conversation);