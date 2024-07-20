// create router instance for resource
const express = require('express')
const songs = express.Router()

// queries
const { 
  getAllSongs
} = require('../queries/song.js')

// middleware
// validation

// index
songs.get('/', async (req, res) => {
  try {
    const allSongs = await getAllSongs()
    res.status(200).json(allSongs)
  } catch (error) {
      console.log(error)
      res.status(500). json({ error: 'server error'})
  }
})

module.exports = songs