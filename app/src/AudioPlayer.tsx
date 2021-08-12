import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './indexReducer';


export default function AudioPlayer() {
  const url = useSelector((state: RootState) => state.selectedSong)
  return (
    <>
      {/* {url} */}

      {url && <audio controls src={url} autoPlay ></audio>}
    </>
  );
}
