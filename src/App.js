import React, { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar/searchBar";
import './App.css'
import Comment from "./components/Comments/comments";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


  const App = (props) => {

    
    const [comments, setComments] = useState([]);
    const [postId, setPostId] = useState([]);
    

    useEffect(() => {
      axios.get('http://localhost:7000/api/comments')
      .then(response => setComments(response.data))
    }, [])

    useEffect(() => {
      
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: 'React Hooks POST Request Example' })
      };
      fetch('https://reqres.in/api/posts', requestOptions)
          .then(response => response.json())
          .then(data => setPostId(data.id));
  
 
    }, []);

    return (
      <div >
        <head>
          <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
              <div class="bg-dark p-4">
                <h5 class="text-white h4">Collapsed content</h5>
                <span class="text-muted">Toggleable via the navbar brand.</span>
              </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
              <button class="navbar-toggler" type="button"data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
            </nav>
      </div>
          <SearchBar />
        </head>

        <body>

          <div className="App">

            <ul>
              {comments.map((comment, index) => <li key={index}>{comment.userName} {comment.userComment} </li>)}
              {/*postId.map((postId, index)=> <li key={index}>{postId.userName}{postId.userComment}</li>)*/}
            </ul>
        
           </div>
        
          <Comment className="App"/>
        </body>
      </div>

    );
}

export default App;






