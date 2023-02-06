import { Sequelize } from "sequelize";

const db = new Sequelize('agenciaviajes', 'root', 'rody1999', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 5,
        acquire: 30000,
        idle: 10000,
    },
    operatorsAliases: false
});

export default db;