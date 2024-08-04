const SONGS_API = import.meta.env.VITE_APP_SONGS

export async function fetchAllSongs() {
  try {
    const res = await fetch(`${SONGS_API}`)
    const songs = await res.json()
    return songs
  } catch (error) {
      throw error
  }
}

export async function createSong(payload) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }

  try {
    const res = await fetch(`${SONGS_API}/new`, options)
    const song = await res.json()
    return song
  } catch (error) {
      throw error
  }
}

export async function fetchOneSong(id) {
  try {
    const res = await fetch(`${SONGS_API}/${id}`)
    const song = await res.json()
    return song
  } catch (error) {
      throw error
  }
}

export async function updateSong(id, payload) {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }

  try {
    const res = await fetch(`${SONGS_API}/${id}`, options)
    const song = await res.json()
    console.log(song)
    return song
  } catch (error) {
      throw error
  }
}