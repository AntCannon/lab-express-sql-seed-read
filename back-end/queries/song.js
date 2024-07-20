// dependencies
const db = require('../db/dbConfig.js')

async function getAllSongs() {
  try {
    const allSongs = await db.any('SELECT * FROM songs')
    return allSongs
  } catch (error) {
      return error
  }
}

async function getSong(id) {
  try {
    const oneSong = await db.one('SELECT * FROM songs WHERE id=$1', id)
    return oneSong
  } catch (error) {
      throw error
  }
}

async function createSong(song) {
  try {
    const newSong = await db.one('INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *', [song.name, song.artist, song.album, song.time, song.is_favorite])
    return newSong
  } catch(error) {
      throw error
  }
}


async function deleteSong(id) {
  try {
    const deletedSong = await db.one('DELETE FROM songs WHERE id=$1 RETURNING *', id)
    return deletedSong
  } catch(error) {
      throw error
  }
}
module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong
}