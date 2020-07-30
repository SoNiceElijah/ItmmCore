module.exports = function(lvl) {
    return function(req,res,next) {
        if(req.lvl < lvl)
        {
            if(req.lvl === 1)
            {
                return res.sendStatus(403);
            }
            else
            {                
                return res.sendStatus(401);
            }
        }
        else
        {
            return next();
        }
    };
}