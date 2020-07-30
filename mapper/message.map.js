const mongoose = require('mongoose');
const message = require('../model/_message');

module.exports = mongoose.model('message',message);