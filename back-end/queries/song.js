// dependencies
const db = require('../db/dbConfig.js')

async function getAllSongs() {
  try {
    const allSongs = await db.any('SELECT * FROM songs')
    return allSongs
  } catch (error) {
      throw error
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

module.exports = {
  getAllSongs,
  getSong
}