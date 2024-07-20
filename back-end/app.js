// dependencies
const express = require('express')
const cors = require('cors')

// config
const app = express()

// controllers
const songController = require('./controllers/songController.js')


// middleware
app.use(cors())
app.use(express.json())

// health check
app.get('/', (req, res) => {
  res.send("Welcome to Tuner App!");
})

// routes
app.use('/songs', songController)

module.exports = app