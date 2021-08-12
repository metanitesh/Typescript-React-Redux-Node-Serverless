import React from 'react';
import { useDispatch } from 'react-redux';
import { selectSong } from './actions';
import { Song } from './song-type';

type SongProps = {
  song: Song,
}

export default function SongElement({ song }: SongProps) {
  const dispatch = useDispatch()
  return (
    <>
      <li><a href='#' onClick={() => {
        dispatch(selectSong(song.previews['preview-lq-mp3']))
      }}>
        {song.name}</a></li>
    </>
  );
}
