const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser');
const cp = require('cookie-parser');
const ef = require('express-fileupload');
const config = require('./utils/config');

const app = express();

async function main() {

    await mongoose.connect(config.DB, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const router = require('./controller/_router');


    app.use(bp.json());
    app.use(cp());
    app.use(ef({
        limits : { fileSize : 50 * 1024 * 1024 },
        useTempFiles : true,
        tempFileDir : __dirname + '/cash/files/'
    }))

    app.use(express.static(__dirname + '\\public'));
    app.use(router);

    app.get('/', require('./page/page'));

    app.use((err,req,res,next) => {
        console.log(err);
        res.status(500).json({error : 'Internal server... :( '});
    });

    app.listen(config.PORT, () => { console.log('Ready...'); });
    
    let bot = require('./utils/vk');
    bot.startPolling(() => { console.log('Polling...'); });
};

main();



