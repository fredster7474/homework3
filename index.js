const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var Event = sequelize.define('event', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }, {
  tableName: 'events',
  timestamps: false

  app.post('/events', (req, res) => {
    const event = req.body
}
