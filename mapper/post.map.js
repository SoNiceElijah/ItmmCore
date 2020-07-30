const mongoose = require('mongoose');
const post = require('../model/_post');

module.exports = mongoose.model('post',post);