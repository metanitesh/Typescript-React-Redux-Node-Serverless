import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './search-bar'
import SongList from './SongList'
import { Song } from './song-type'
import AudioPlayer from './AudioPlayer'
function App() {

  const [songs, setSongs] = useState<Song[]>([])
  const [selectedUrl, setSelectedUrl] = useState('')
  console.log(songs)
  console.log(selectedUrl)
  return (
    <div className="App">
      <SearchBar setSongs={setSongs}></SearchBar>
      <SongList songs={songs} setSelectedUrl={setSelectedUrl} />
      <AudioPlayer url={selectedUrl} />

    </div>
  );
}

export default App;
