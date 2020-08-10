const router = require('express').Router();
const $ = require('../service/_index');
const mime = require('mime-types');

const types = {
    application : 1,
    model : 2,
    font : 3,
    audio : 4,
    image : 5,
    text : 6,
    video : 7,    
}

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
                //TODO: owner
            }); 
            await attachment.save();
            answerIds.push(attachment._id);
        }        
    }

    res.json(answerIds);
});

module.exports = router;