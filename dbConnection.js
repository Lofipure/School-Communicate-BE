const {Sequelize} = require("sequelize");

const connection = new Sequelize('student_communicate_system', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;