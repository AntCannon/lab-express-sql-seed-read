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
    const newSong = await db.one('INSERT INTO songs (title, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *', [song.title, song.artist, song.album, song.time, song.is_favorite])
    return newSong
  } catch(error) {
      throw error
  }
}

// nikedas
async function createLike(favorite) {
  try {
    const newFavorite = await db.one('INSERT INTO favorites (user_id, shoe_id) VALUES ($1, $2) RETURNING *', [favorite.user_id, favorite.shoe_id])
    return newFavorite
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

async function updateSong(id, song) {
  const {
    title,
    artist,
    album,
    time,
    is_favorite
  } = song
  
  try {
    const updatedSong = await db.one('UPDATE songs SET title=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *', [title, artist, album, time, is_favorite, id])
    return updatedSong
  } catch(error) {
      throw error
  }
}
module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong
}