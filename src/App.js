import React, { useState, useEffect } from "react";
import Bootstrap from 'bootstrap';
import SearchBar from "./components/SearchBar/searchBar";
import axios from 'axios';

const App = (props) => {

  const [video, setVideo] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  useEffect(()=> {
    axios.get('https://www.youtube.com/embed/VIDEO_ID')
    .then(response => setVideo(response.data)
    )},[])
    console.log(video)
  return (
    <div>
      <h1>Hello World {useEffect}</h1>
      <SearchBar />
    </div>
  );

}
export default App;






