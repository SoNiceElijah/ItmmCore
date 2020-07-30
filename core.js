const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser');
const cp = require('cookie-parser');

const app = express();

async function main() {

    await mongoose.connect('mongodb://localhost:27017/itmmcore', { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const router = require('./controller/_router');


    app.use(bp.json());
    app.use(cp());

    app.use(express.static(__dirname + '\\public'));
    app.use(router);

    app.get('/', require('./page/page'));

    app.use((err,req,res,next) => {
        console.log(err);
        res.status(500).json({error : 'Internal server... :( '});
    });

    app.listen(3000, () => { console.log('Ready...'); });
};

main();



