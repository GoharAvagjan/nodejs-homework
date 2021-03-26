/*
    1.  Ստեղծել homework իրադարձությունը լսող , որը կկանչի handler :
    handler-ը պետք է արտածի Homeworks.txt պարունակությունը: emit անել homework :
*/
const EventEmitter = require('events');
const fs = require('fs');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('homework', (data) => {
    fs.readFile('homework.txt', 'utf8', function(err, data){
        console.log(data);
    });
});

myEmitter.emit('homework');
get




