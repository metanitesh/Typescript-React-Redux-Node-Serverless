import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadSong } from './actions';
import { getUrl, callFreeSoundApi } from './api'
import { Song } from './song-type'


export default function SearchBar() {
  const dispatch = useDispatch()
  const [val, setVal] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const url = getUrl(val)
    const results = callFreeSoundApi(url)
      .then((data) => {
        dispatch(loadSong(data.results))
      })
    // fetch()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={val} onChange={(event) => setVal(event.target.value)} />
    </form>
  );
}
