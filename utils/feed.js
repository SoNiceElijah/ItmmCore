let storage = {};

function wait(id, callback) {
    
    if(storage[id])
    {
        storage[id].push(callback);
    }
    else
    {
        storage[id] = [callback];
    }

}


function fire(target, event) {
    if(storage[target])
    {
        storage[target].forEach(f => f(event));
        delete storage[target];
    }
}