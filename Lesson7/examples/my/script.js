//const c = require('/func')


//const c = require('os');
//console.log(os.cpus);

//

const fs = require('fs');

let users=[{
    name:'ivan',
    age:25
}]

// fs.writeFile('test.json', JSON.stringify(users), err=>{
//     if(err){
//         console.log('errroк !!')
//     }else{
//         console.log('success');
//     }
//
// });

const moment = require('moment');

console.log(moment());

const http=require('http');
// использутся для обработки запросов
//GET
//POST

const server = http.createServer((req, res)=>{
        if(req.url=='/'){
            res.write('welcome to server');
            res.end();
        }
});

server.listen('3000');
server.on('connection',()=>{
    console.log('connection is on');
});




