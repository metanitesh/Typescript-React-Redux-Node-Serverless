import React from 'react';
import { Song } from './song-type'
import SongElement from './song'
import { useSelector } from 'react-redux';
import { RootState } from './indexReducer';


// setSelectedUrl: React.Dispatch<React.SetStateAction<string>>
export default function SongList() {
  const songs = useSelector((state: RootState) => state.songs)
  if (songs.length === 0) {
    return null
  }
  return (
    <ul>
      {songs.map(song => (
        <SongElement key={song.id} song={song} />
      ))}
    </ul>
  );
}
