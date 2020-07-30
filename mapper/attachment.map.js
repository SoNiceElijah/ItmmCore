const mongoose = require('mongoose');
const attachment = require('../model/_attachment');

module.exports = mongoose.model('attachment',attachment);