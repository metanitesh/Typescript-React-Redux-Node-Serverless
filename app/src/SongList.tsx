import React from 'react';
import { Song } from './song-type'
import SongElement from './song'
type SongListProps = {
  songs: Song[],
  setSelectedUrl: (url: string) => void
}

// setSelectedUrl: React.Dispatch<React.SetStateAction<string>>
export default function SongList({ songs, setSelectedUrl }: SongListProps) {
  if (songs.length === 0) {
    return null
  }
  return (
    <ul>
      {songs.map(song => (
        <SongElement key={song.id} song={song} setSelectedUrl={setSelectedUrl} />
      ))}
    </ul>
  );
}
