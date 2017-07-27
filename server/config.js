// create connection to db
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://freriuda:_JObksBlediD-yEzp0fOquuvGItgjAIn@pellefant.db.elephantsql.com:5432/freriuda', {
    dialect: 'postgres',
});
console.log('Connected to remote db');

module.exports = db;