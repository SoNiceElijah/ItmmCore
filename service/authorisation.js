let online = {};

async function login(user)
{
    let token = Math.random().toString(36).substring(2, 14) + Math.random().toString(36).substring(3, 15);
    online[token] = user;
    return token;
}

async function logout(token)
{
    delete online[token];
}

async function middleware(req,res,next)
{
    let token = req.body.token || req.cookies.token || req.headers.token;
    if(!(token && online[token]))
    {
        req.lvl = 0;
        return next();
    }
    else
    {
        req.user = online[token];
        req.lvl = req.user.role;
        req.token = token;       
        return next();
    }
}

module.exports = {
    login,
    logout,
    middleware
}