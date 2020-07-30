const $ = require('../mapper/_index');

const v = require('./validation');
const auth = require('./authorisation');
const lvl = require('./guard');

module.exports = {
    ...$,

    v,
    auth,
    lvl
};