const mongoose = require('mongoose');
const timetable = require('../model/_timetable');

module.exports = mongoose.model('timetable',timetable);