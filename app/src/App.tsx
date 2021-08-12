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

  return (
    <div className="App">
      <div data-testid="testDiv">Hello World</div>
      <SearchBar />
      <SongList />
      <AudioPlayer />
    </div>
  );
}

export default App;
