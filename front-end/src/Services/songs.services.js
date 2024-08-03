const SONGS_API = import.meta.env.VITE_APP_SONGS

export async function fetchAllSongs() {
  try {
    const res = await fetch(SONGS_API)
    const songs = await res.json()
    return songs
  } catch (error) {
      throw error
  }
}