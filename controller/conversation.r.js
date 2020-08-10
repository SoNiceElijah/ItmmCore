const router = require('express').Router();
const $ = require('../service/_index');
const mime = require('mime-types');
const { Types } = require('mongoose');
const jarvis = require('../utils/feed');

const types = {
    application : 1,
    model : 2,
    font : 3,
    audio : 4,
    image : 5,
    text : 6,
    video : 7,    
}

router.use($.lvl(1));

router.post('/get',
    $.v({
        cids : [String], 
        full : Boolean 
    }), 
    async (req,res) => {

        if(req.body.cids)
        {
            let query = $.Conversaton.find({_id : { $in : req.body.cids },  users : { $elemMatch : req.body.user._id }}); 
            if(req.body.full)
            {
                query = query.populate('attachments');
                query = query.populate('users');
            }
            let chats = await query.exec();

            res.json(chats);
        }
        else
        {
            let chats = await $.Conversaton.find({ users : { $elemMatch : req.body.user._id }}); 
            let cids = chats.map(c => c._id);

            res.json(cids);
        }        
});

router.post('/send', $.v({ 
    $cid : String,
    $text : String,
    attachments : [String],
    mid : String
 }), async (req,res) => {

    let msg = new $.Message(req.body);
    if(msg.attachments)
    {
        for(let a of msg.attachment)
        {
            if(!(await $.Attachment.findById(a)))
                return res.status(400).json({ error : "Attachments not found"})
        }
    }
    msg.emotions = [];
    msg.marks = 0;
    msg.comments = [];
    msg.owner = req.body.user._id;

    if(req.body.mid)
    {
        let parent = await $.Message.findOne({ _id : mid, cid : { $in : req.user.conversartions }});
        if(!parent)
        {
            return res.status(400).json({ error : "Wrong parent message id"});
        }

        parent.comments.push(msg._id);
        parent.save();
    }

    await msg.save();

    let uids = (await $.User.find({ conversartions : { $elemMatch : req.body.cid } })).map(u => u._id);
    uids.forEach(u => {
        jarvis.fire('id'+u, { type : 'msg', content : msg});
    })

    res.sendStatus(200);

 });

 router.post('/history', $.v({
     $cid : String,
     offset : Number,
     limit : Number,
     full : Boolean
 }), async (req,res) => {

    if(req.user.conversartions.indexOf(req.body.cid) === -1)
    {
        return res.status(401).json({ error : "No access"});
    }

    let { offset, limit, full } = req.body;

    if(!offset)
    {
        offset = 0;
    }
    if(!limit && limit !== 0)
    {
        limit = 20;
    }

    let query = $.Message.find({ cid : req.body.cid }).skip(offset).limit(limit);
    if(full)
    {
        query = query.populate('cid');
        query = query.populate('owner');
        query = query.populate('attachments');
        query = query.populate('comments');
    }
    let msgs = await query.exec();
    res.json(msgs);
 });

 router.post('/message', $.v({
     $mids : [String],
     full : Boolean
 }), async (req,res) => {
    
    let query = $.Message.find({ _id : { $in : req.body.mids },cid : { $in : req.user.conversations } });
    if(full)
    {
        query = query.populate('cid');
        query = query.populate('owner');
        query = query.populate('attachments');
        query = query.populate('comments');
    }
    let msgs = await query.exec();
    res.json(msgs);
 });

 router.post('/like', $.v({
     $mid : String,
     $emoji : String,
 }), async (req,res) => {

    let { mid, emoji } = req.body;
    let { conversartions } = req.user;
    let msg = await $.Message.findOne({ _id : mid, cid : { $in : conversartions }});

    if(!msg)
    {
        return res.status(400).json({ error : "Wrong message id"});
    }

    let emotion = msg.emotions.find(e => e.mem === emoji && e.owner === req.user._id);
    if(emotion)
    {
        let idx = msg.emotions.indexOf(emotion);
        msg.emotions = msg.emotions.splice(idx,1);
    }
    else
    {
        msg.emotions.push({
            mem : emoji,
            owner : req.user._id
        })
    }

    await msg.save();
    res.sendStatus(200);

 });

router.post('/upload', async (req,res) => {

    let answerIds = [];    

    for(let prop in req.files)
    {
        let fileArray = req.files[prop];
        if(!Array.isArray(fileArray))
        {
            fileArray = [fileArray];
        }
        for(let file of fileArray)
        {
            let type = file.mimetype.split('/')[0];
            if(!types[type])
                return res.sendStatus(400);

            let ext = mime.extension(file.mimetype);
            let path = await $.file.save(file.tempFilePath);
            
            
            let attachment = new $.Attachment({
                name : file.name,
                type : types[type],
                extension : ext,
                url : path,
                size : file.size,
                owner : req.body.user._id
            }); 
            await attachment.save();
            answerIds.push(attachment._id);
        }        
    }

    res.json(answerIds);
});

module.exports = router;