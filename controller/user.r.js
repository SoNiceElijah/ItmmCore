const router = require('express').Router();

const $ = require('../service/_index');

router.post('/register',$.v({

    $login : String,
    $password : String,
    
    $username : String,
    $vk : String,

    group : String,
    sub : String,

}), async (req,res) => {

    let u = new $.User(req.body);
    if(!(await u.password(req.body.password)))
    {
        return res.status(500).json({ error : "Login already taken"});
    }

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

//FIXME: test function
router.get('/', $.v({}), async (req,res) => {
    
    let u = req.user;
    res.json(u);
});

module.exports = router;