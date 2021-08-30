import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar/searchBar";
import Comment from "../components/Comments/comments";
import './App.css'
import comments from "../components/Comments/comments";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


  const App = (props) => {



    const [comments, setComments] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const postComment = ()=>{
      axios.post('http://localhost:7000/api/comments', {
        userName: 'post',
        userComment: 'number1'
      })
      .then(response =>(response.data))
      .catch(error => console.log(error))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const postReply = (id)=>{
      axios.post(`http://localhost:7000/api/comments/${id}`, {
        userName: 'reply',
        userComment: 'fdgsdfg'
      })
      .then(response =>(response.data))
      .catch(error => console.log(error))
    }

    const putComment = (id)=>{
      axios.put(`http://localhost:7000/api/comments/${id}`, {
        userName: 'Candy',
        userComment: 'Mayne'
      })
      .then(response => (response.data));
    
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const deleteComment = (id)=>{
      axios.delete(`http://localhost:7000/api/comments/${id}`,)
      .then(response =>(response.data))
      .catch(error => console.log(error))
    }


    useEffect(() => {
      axios.get('http://localhost:7000/api/comments')
      .then(response => setComments(response.data))
    }, [postComment,deleteComment,putComment,postReply])


    return (
      
      <div >
        <div>
          <iframe src="https://www.youtube.com/embed/cWDJoK8zw58"></iframe>
        
        </div>
       
        {/*  <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <h5 className="text-white h4">Collapsed content</h5>
                <span className="text-muted">Toggleable via the navbar brand.</span>
              </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
              <button className="navbar-toggler" type="button"data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
      </div>


      <div className="App">
 */}

{/*<SearchBar />*/}


        <button onClick={postComment}> Click me to post comment</button>

          <Comments comments={comments} postReply={postReply} deleteComment={deleteComment} putComment={putComment}/>
      </div>




    );
}

export default App;






