const { google } = require('googleapis');
const scopes = [
    'https://www.googleapis.com/auth/drive'
];
const config = require('../utils/config');
const fs = require('fs');

const auth = new google.auth.JWT(
    config.DRIVE_EMAIL, null,
    config.DRIVE_PRIVATE, scopes
);
const drive = google.drive({ version: "v3", auth });
const storage = "1QJL0PCNmRrz8RyNNhTgGvT-NatMGTTSU";

module.exports = {
    directroty : (path) => { return drive.files.list({});  },
    save : (tmp,mime) => {

        return new Promise((resolve,reject) => {
            let fileName = Math.random().toString(36).substring(2, 14)
            + Math.random().toString(36).substring(3, 15)
            + Date.now();

            let path = fileName;
            let fileMetadata = {
                name : fileName,
                parents : [storage]
            };

            let media = {
                mimeType : mime,
                body : fs.createReadStream(tmp),
            };

            drive.files.create({
                resource : fileMetadata,
                media : media,
                fields: 'id',
            }, (err,res) => {
                if(err)
                {
                    reject(err);
                } 
                else
                {
                    fs.unlinkSync(tmp);
                    resolve(res.data.id);
                }

            });
        })        
    },
    get : async (attachment, res) => {
        
        let fileMetadata = {
            fileId : attachment.url,
            alt: 'media'
        };

        res.set('Content-Disposition',`attachment; filename="${attachment.name}"`);
        let stream = await drive.files.get(fileMetadata, {responseType: 'stream'})
        
        stream.data
            .on('error', () => { res.sendStatus(404); })
            .pipe(res);
    }
}