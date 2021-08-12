import React from 'react';

type AudioPlayerProps = {
  url: string
}
export default function AudioPlayer({ url }: AudioPlayerProps) {
  return (
    <>
      {/* {url} */}

      {url && <audio controls src={url} autoPlay ></audio>}
    </>
  );
}
