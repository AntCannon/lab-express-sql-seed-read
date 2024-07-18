const app = require('express')()

// health check
app.get('/', (req, res) => {
  res.send("Welcome to Tuner App!")
})

module.exports = app