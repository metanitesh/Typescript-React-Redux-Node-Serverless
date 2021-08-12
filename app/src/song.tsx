import React from 'react';
import { Song } from './song-type';
type SongProps = {
  song: Song,
  setSelectedUrl: (url: string) => void
}

export default function SongElement({ song, setSelectedUrl }: SongProps) {
  return (
    <>
      <li><a href='#' onClick={() => {
        setSelectedUrl(song.previews['preview-lq-mp3'])
      }}>
        {song.name}</a></li>
    </>
  );
}
