import React, { useState } from 'react';
import { getUrl, callFreeSoundApi } from './api'
import { Song } from './song-type'

type SearchBarProps = {
  setSongs: (songs: Song[]) => void
}

export default function SearchBar({ setSongs }: SearchBarProps) {

  const [val, setVal] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const url = getUrl(val)
    const results = callFreeSoundApi(url)
      .then((data) => {
        setSongs(data.results)
      })
    // fetch()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={val} onChange={(event) => setVal(event.target.value)} />
    </form>
  );
}
