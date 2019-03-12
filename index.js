
/*********use protocol and request http************* */
/*const http = require('http');

const colors = require('colors'); // using npmjs document to another modules
const handleServer = function(req, res){
    res.writeHead(200,{ 'content-type' : 'text/html' });// to resulto number review WIKI
    res.write('<h1> hi world.....:)</h1>');
    res.end();
}
const server =http.createServer(handleServer);
server.listen(3000, function(){
    console.log('server on port 3000'.yellow);
})*/
// USING EXPRESS WITH NODE JS
const express = require('express');
const colors = require('colors');
const server = express();

server.get('/', function(req, res){
    res.send('<h1> hiw world with Express... </h1>');
    res.end();
})

server.listen(3000, function(){
    console.log('server on port:3000'.red);
});
/*http.createServer(function(req, res){// creating server
    res.writeHead(200,{ 'content-type' : 'text/plan' });// to resulto number review WIKI
    res.write('dsadsadsadsadasd');
    res.end();
}).listen(3000);// port localhost:3000
using method to improve the server.*/

/*************************end http*********** */

// here to use modules dont need / beacuse is owner NODE
// const os = require('os');//
// console.log(os.platform());
// console.log(os.release());
// console.log('free mem :', os.freemem(), 'bytes');
// so you can use several modules prebuildings.
//const fs = require('fs');
/*********method asyncronic******* */
// to read files its async
// fs.readFile('./text.txt', function(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('method async');
//this code ASYNCRONO if
// fs.writeFile('./text.txt', 'line one', function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('File created');
// });

// console.log('last line code');
// db a example to create
// const users = query('SELECT * FROM Users');

// query('SELECT * FROM users', function(err, users){
//     if(err){
//         console.log(err);
//     }
//     if(users){

//     }
// })