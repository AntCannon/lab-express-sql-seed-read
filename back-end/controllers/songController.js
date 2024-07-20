// create router instance for resource
const express = require('express')
const songs = express.Router()

// index
songs.get('/', (req, res) => {
  res.status(200).json({status: 'index route ok'})
})

module.exports = songs