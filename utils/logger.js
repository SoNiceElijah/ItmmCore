
function profile(req,res,next) {
    
    let lockNum = reqNum++;
    let t1 = performance.now();
    console.log(`${lockNum} ${req.method} ${req.originalUrl} %c[STARTED]`,'color : #2643b5');

    res.on('finish', () => {            
        let t2 = performance.now();
        console.log(`${lockNum} ${req.method} ${req.originalUrl} in ${t2 - t1}ms %c[FINISHED]  `,'color : #24bf50');
    })

    res.on('close', () => {
        let t2 = performance.now();
        console.log(`${lockNum} ${req.method} ${req.originalUrl} in ${t2 - t1}ms %c[CLOSED] `,'color : #bf3e24');
    })

    next();
}

module.exports = profile