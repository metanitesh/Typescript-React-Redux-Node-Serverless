export const LOAD_SONGS = 'LOAD_SONGS'
export const SELECT_SONG = 'SELECT_SONG'

export const loadSong = (data: any[]) => {
  return {
    type: LOAD_SONGS,
    payload: data
  }
}

export const selectSong = (data: string) => {
  return {
    type: SELECT_SONG,
    payload: data
  }
}