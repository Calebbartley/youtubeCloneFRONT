import React, { useState, useEffect } from "react";

// import SearchBar from "../components/SearchBar/searchBar";
import './App.css'
import comments from "../components/Comments/comments";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Comments from "../components/Comments/comments";
import useForm from "../hooks/useForm";


  const App = (props) => {



    const [comments, setComments] = useState([]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const postComment = ()=>{
      axios.post('http://localhost:7000/api/comments/', {
        userName: 'post',
        userComment: 'number1',
      })
      .then(response =>(response.data))
      .catch(error => console.log(error))
    }

    const postReply = (id, userName, userComment)=>{
      console.log("id from reply:", id);
      axios.post(`http://localhost:7000/api/comments/${id}`, {
        userName: userName,
        userComment: userComment,
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
    }, [postComment,deleteComment,putComment, postReply])


    return (
      <div >
          <div>
          <iframe src="https://www.youtube.com/embed/cWDJoK8zw58"></iframe>
          </div>
          <button onClick={postComment}> Click me to post comment</button>
        

          <Comments comments={comments} postReply={postReply} deleteComment={deleteComment} putComment={putComment} />
        
      </div>

        
    

    );
}

export default App;






