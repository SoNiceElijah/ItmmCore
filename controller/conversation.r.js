const router = require('express').Router();
const $ = require('../service/_index');
const e = require('express');

router.post('/upload', async (req,res) => {

    

    for(let fileArray in req.files)
    {
        if(!Array.isArray(fileArray))
        {
            fileArray = [fileArray];
        }
        for(let file of fileArray)
        {
            let attachment = new $.Attachment({
                name : file.name,
            }); 
        }

        
    }

    console.log();
    res.json({ });

});

module.exports = router;