const { performance } = require('perf_hooks');

let storage = {};

function profile(req,res,next) {
    
    let lockNum = Date.now() + '' + Math.floor(Math.random() * 1000);
    let t1 = performance.now();

    let finished = false;

    if(!storage[req.originalUrl])
        storage[req.originalUrl] = { data : [], avg : 0 };


    console.log(`${lockNum} ${req.method} ${req.originalUrl} %c[STARTED]`,'color : #2643b5');
    
    let finishLog = (type, color) => {

        let t2 = performance.now();
        let time = t2 - t1;
        console.log(`${lockNum} ${req.method} ${req.originalUrl} in ${time}ms %c[${type}]  `,`color : ${color}`);
     
        storage[req.originalUrl].data.push(time);
        if(storage[req.originalUrl].data.length > 10)
        {
            storage[req.originalUrl].data.shift();
        }
        storage[req.originalUrl].avg = storage[req.originalUrl].data.reduce((acc,el) => acc + el) / storage[req.originalUrl].data.length; 
    }

    res.on('finish', () => {    
        
        finished = true;
        
        finishLog('FINISHED','#24bf50');
    })

    res.on('close', () => {

        if(finished)
            return;

        finishLog('CLOSED','#bf3e24');
    })

    next();
}

module.exports = profile
module.exports.avg = (path) => { return storage[path] ? storage[path].avg : null } 