import React, { useState, useEffect } from "react";
// import Bootstrap from 'bootstrap';
// import { SearchBar, VideoList } from "./components";
import axios from 'axios';

const App = (props) => {

  const [video, setVideo] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  useEffect(()=> {
    axios.get('https://www.youtube.com/embed/VIDEO_ID')
    .then(response => setVideo(response.data, [props.index])
    )},[video, props.index])

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );

}
export default App;






