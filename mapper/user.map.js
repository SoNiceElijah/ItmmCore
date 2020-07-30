const mongoose = require('mongoose');
const crypto = require('crypto');
const user = require('../model/_user');

user.methods.password = async function(password) {

    let users = await this.constructor.find({login : this.login});
    if(users.length >= 1)
        return false;        

    this.salt = Math.random().toString(36).substring(2, 14) + Math.random().toString(36).substring(3, 15);
    this.hash = crypto.createHmac('sha256',this.salt).update(password).digest('hex');

    return true;
}

user.methods.check = function(password) 
{
    let hash = crypto.createHmac('sha256',this.salt).update(password).digest('hex');
    return hash === this.hash;
}

module.exports = mongoose.model('user',user);