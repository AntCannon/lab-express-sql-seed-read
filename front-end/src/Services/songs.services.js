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
  const method = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }

  try {
    const res = await fetch(`${SONGS_API}/new`, method)
    const song = await res.json()
    console.log(song)
    return song
  } catch (error) {
    console.log(error)
      throw error
  }
}