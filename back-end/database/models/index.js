const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

const modelFiles = fs.readdirSync(__dirname).filter((file) => (
    file.indexOf('.') !== 0 && file !== 'index.js' && file.slice(-3) === '.js'
)).map((file) => path.join(__dirname, file));

modelFiles.forEach((file) => {
    const model = require(path.join(file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
});
  
Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
