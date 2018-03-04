var Sequelize = require('sequelize')
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres')

module.exports = sequelize
