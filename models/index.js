'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];
const db        = {};
// const Op = Sequelize.Op;

let sequelize;

// console.log(config);
// console.log(config.use_env_variable);
if (config.use_env_variable) {
//   console.log("did");
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    // console.log("did else");
    sequelize = new Sequelize(config.database, config.username, config.password,
        {
            host: 'localhost',
            dialect: 'mysql',
            logging: false,
            freezeTableName: true,
            operatorsAliases: false
          },config);
    // const sequelize = new Sequelize('call_logs_db', 'root', 'rush2112','mysql');
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
// console.log(sequelize);

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
