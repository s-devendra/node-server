var Sequelize = require('sequelize');

const dbConnection = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false,
  define:{
    underscored: true
  }
});

export default dbConnection;