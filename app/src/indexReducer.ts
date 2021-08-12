import { combineReducers } from "redux"
import { LOAD_SONGS, SELECT_SONG } from './actions'

type actionTypeArray = {
  type: string;
  payload: any[]
}

type actionTypeMessage = {
  type: string;
  payload: any[]
}

const songsReducer = (state: any[] = [], action: actionTypeArray) => {
  if (action.type === LOAD_SONGS) {
    return action.payload
  }

  return state
}

const selectedSongReducer = (state = '', action: actionTypeMessage) => {
  if (action.type === SELECT_SONG) {
    return action.payload
  }
  return state
}

export const rootReducer = combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer })
export type RootState = ReturnType<typeof rootReducer>