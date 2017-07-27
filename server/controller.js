var Sequelize = require('sequelize');
var db = require('./config.js');
var Message = require('./models.js');

module.exports = {
    sendMessages: function(req, res) {
        // let data = Message.get('text');
        // console.log(data);
        Message.findAll({}).then((result) => {
            var text = result.map(item => item.text);
            console.log('the database is ', text);  
            res.send(text);
        });
    }
}
