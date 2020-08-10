const router = require('express').Router();

const $ = require('../service/_index');

router.post('/register',$.v({

    $login : String,
    $password : String,
    
    $username : String,
    $code : String,

    group : String,
    sub : String,

}), async (req,res) => {

    let u = new $.User(req.body);
    if(!(await u.password(req.body.password)))
    {
        return res.status(500).json({ error : "Login already taken"});
    }
    let vk = $.regs.register(req.body.code, req.body.username);
    if(!vk)
    {
        return res.status(400).json({ error : "Invalid vk code"});
    }

    u.vk = vk;
    u.level = 0;
    u.save();

    res.sendStatus(200);

});

router.post('/login', $.v({

    $login : String,
    $password : String

}), async (req,res) => {

    let u = await $.User.findOne({ login : req.body.login});
    
    if(!u.check(req.body.password))
    {
        return res.status(400).json({ error : 'Wrong login/password'});
    }

    let token = await $.auth.login(u);
    res.json({ token });
});

router.use($.lvl(1));

router.post('/logout', $.v({

}), async (req,res) => {
    $.auth.logout(req.token);
    res.sendStatus(200);
});

router.post('/edit', $.v({

    username : String,
    old_password : String,
    new_password : String

}), async (req,res) => {

    if(req.body.username)
    {
        req.user.username = username;
    }
    if(req.body.new_password && !req.body.old_password)
    {
        return res.status(400).json({ error : "Old psaaword is requiered" });
    }
    if(req.body.new_password && req.body.old_password)
    {
        if(!res.user.check(req.body.old_password))
        {
            return res.status(400).json({ error : "Wrong password"});
        }
        else
        {
            await res.user.password(req.body.new_password,false);
            await res.user.save();
        }
    }
    
    res.sendStatus(200);
});

router.post('/delete', $.v({}), async (req,res) => {

    await $.User.deleteOne({ _id : req.user._id});
    res.sendStatus(200);

});

//FIXME: test function
router.get('/', $.v({}), async (req,res) => {
    
    let u = req.user;
    res.json(u);
});

router.use($.lvl(5));

router.post('/ban', $.v({ $uid : String }), async (req,res) => {

    await $.User.deleteOne({ _id : req.body.uid });

    //TODO: u were banned event
    res.sendStatus(200);

});

router.post('/promote', 
    $.v({ $uid : String, $lvlup : Number, $roleup : Number }),
    async (req,res) => {

        let user = await $.User.findById(req.body.uid);
        if(!user)
        {
            return res.status(400).json({ error : "Wrong user id"});
        }

        user.level = Math.max(0,Math.min(20,user.level + req.body.lvlup));
        usert.role = Math.max(0,Math.min(20,user.role + req.body.roleup));

    });


module.exports = router;