const $ = require('../mapper/_index');

const v = require('./validation');
const auth = require('./authorisation');
const lvl = require('./guard');
const regs = require('./register');
const file = require('./file');

module.exports = {
    ...$,

    v,
    auth,
    lvl,
    regs,
    file
};