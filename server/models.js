// var mysql = require('mysql');
var Sequelize = require('sequelize');
// var orm = new Sequelize('helloworld', 'root', '');
var db = require('./config.js');

var Message = db.define('message', {
    text: { type: Sequelize.STRING, allowNull: false }
})

Message.create({ text: 'yo check out dis sick db entry'});


// Message.findAll().then((result) => {
//     var text = result.map(item => item.text);
//     console.log('the database is ', text);  
// });

Message.sync();

module.exports = Message;