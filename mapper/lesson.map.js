const mongoose = require('mongoose');
const lesson = require('../model/_lesson');

module.exports = mongoose.model('lesson',lesson);