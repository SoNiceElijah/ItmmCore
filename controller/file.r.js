const router = require('express').Router();
const $ = require('../service/_index');
const { Types } = require('mongoose');

router.get('/:fid', async (req,res) => {
    if(req.params.fid.length != 24)
        return res.sendStatus(404);

    let fid = Types.ObjectId(req.params.fid);
    let attachment = await $.Attachment.findById(fid);

    if(!attachment)
        return res.sendStatus(404);

    
    await $.file.get(attachment,res);

});

module.exports = router;