const fs = require('fs');

function handler(req,res,next) { 

    res.status(413).json({ error : '50MB max size' }); 

    setTimeout(() => { 

        for(let prop in req.files)
        {
            let fileArray = req.files[prop];
            if(!Array.isArray(fileArray))
            {
                fileArray = [fileArray];
            }
            for(let file of fileArray)
            {
                fs.unlinkSync(file.tempFilePath);
            }        
        }
     },500);
};

module.exports = {
    limits : { fileSize : 50 * 1024 * 1024 },
    useTempFiles : true,
    limitHandler : handler,
    tempFileDir : __dirname + '../cash/files/',
}