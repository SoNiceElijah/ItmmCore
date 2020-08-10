const router = require('express').Router();
const $ = require('../service/_index');
const jarvis = require('../utils/feed');

router.use($.lvl(1))

router.post('/listen', $.v({}), (req,res) => {

    jarvis.wait('id'+req.user._id, async (event) => {
        res.json(event);
    });
    setTimeout(() => {

        jarvis.fire('id'+req.user._id, { type : 'nop' });

    }, 25 * 1000);

});

module.exports = router;