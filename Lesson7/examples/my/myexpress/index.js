const express = require('express');

const app = express();

app.listen(3100, ()=>{
    console.log('connection1');
})

app.get('/', (req,res)=>{
    res.send('My Response 1 ');
})