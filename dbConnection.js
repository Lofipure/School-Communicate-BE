const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('student_communicate_system', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
});

async function main() {
    try {
        await sequelize.authenticate();
        console.log("OK");
    } catch (err) {
        console.err("ERR: ", err)
    }
}

main();