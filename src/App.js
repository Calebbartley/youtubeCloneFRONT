import React, { useState, useEffect } from "react";
// import SearchBar from "./components/SearchBar/searchBar";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


  const App = (props) => {

    // const [video, setVideo] = useState(0);
    const [comments, setComments] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:7000/api/comments')
      .then(response => setComments(response.data))
    }, [])


    // useEffect(()=> {
    //   axios.get('https://www.youtube.com/embed/dQw4w9WgXcQ')
    //   .then(response => setComments(response.data[props.index])
    //   )},[comments, props.index])
    //   console.log(video)
    return (
      <div>
        {/* <h1>Hello World {useEffect}</h1> */}
        <ul>
          {comments.map((comment, index) => <li key={index}>{comment.userName} {comment.userComment} </li>)}
        </ul>
        {/* <SearchBar /> */}
      </div>
    );
}

export default App;






