const cluster = require('cluster');
const fs = require('fs');

cluster.setupMaster({
    exec: './app.js',
});

cluster.fork();
cluster.fork();

for(let id in cluster.workers){
    cluster.workers[id].on('message',function(message){
        console.log(message.log);
    });
}

cluster.on('exit',function(worker,code,signal){
    console.log(`WORKER ${worker.process.pid} died FOR ${signal || code} IN ${new Date()};`);
    cluster.fork();
});
