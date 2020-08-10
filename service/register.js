const storage = {};
const jarvis = require('../utils/feed');
const $ = require('../mapper/_index');

async function createToken(id)
{
    if((await $.User.findOne({ vk : id })))
        return null;

    let token = Math.random().toString(36).substring(2, 6) + '-' + Math.random().toString(36).substring(4, 8) + '-' + Math.random().toString(36).substring(6, 10);
    storage[token] = id;

    setTimeout(() => { 

        remove(token);
        jarvis.fire('vk'+id,{ type : 'exp' });

    }, 5 * 60 * 1000);

    return token;
}

function check(token)
{
    return storage[token];
}

function remove(token)
{
    if(storage[token])
    {
        delete storage[token];
    }
}

function register(token, username) {

    let res = check(token);
    if(res)
    {
        jarvis.fire('vk'+res,{ type : 'reg', username : username });
        remove(token);
        return res;
    }
    else
    {
        return false;
    } 
}

module.exports = {
    createToken,
    register
}