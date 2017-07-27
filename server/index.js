const http = require('http');
const express = require('express');
const cors = require('cors');
const db = require('./config.js');
const model = require('./models.js');
const controller = require('./controller.js');
const Message = require('./models.js');
var Sequelize = require('sequelize');

const port = 3000;

const app = express()
    .use(cors());

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!!');
}

const server = app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});

// app.use(controller.sendMessages);
app.get('/', function(req, res) {
    controller.sendMessages(req, res);
    
    //res.send();
})

// server.listen(port, (err) => {
//     if (err) {
//         return console.log('something effed with the server yo', err)
//     }

//     console.log(`server is listening on ${port}`)
// })

