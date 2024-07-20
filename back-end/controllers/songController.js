// create router instance for resource
const express = require('express')
const songs = express.Router()

// queries
const { 
  getAllSongs,
  getSong,
  createSong
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

// show
songs.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const oneSong = await getSong(id)
    res.json(oneSong)
  } catch(error) {
      console.log(error)
      res.status(404).json({ error: `Song with id ${id} not found.`})
  } 
})

// create song
songs.post('/', async (req, res) => {
  try {
    const newSong = await createSong(req.body)
    res.status(200).json(newSong)
  } catch(error) {
      res.status(400).json({ error: 'bad request'})
  }
})

module.exports = songs