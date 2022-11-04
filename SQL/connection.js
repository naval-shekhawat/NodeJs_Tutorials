const Sequelize = require("sequelize");
const sequelizeInstance = new Sequelize(
 "myfirstdb",
 "root",
 "Relevel@123",
    {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire:30000,
            idle: 10000
        }
    }
);

module.exports = sequelizeInstance;