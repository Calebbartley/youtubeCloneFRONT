import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar/searchBar";
import CommentsList from "../components/commentsList/CommentsList";
import Comment from "../components/Comment/Comment";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import axios from 'axios';
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


  const App = (props) => {



    const [comments, setComments] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const postComment = ()=>{
      axios.post('http://localhost:7000/api/comments/', {
        
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
        <Container fluid>
          <Navbar expand="" variant="light" bg="light">
            <Container fluid>
              <Navbar.Brand href="#">Youtube</Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
  
        </div>
        <div>
        <SearchBar/>
          <Container>
            <iframe height="500px" width='1000px' src="https://www.youtube.com/embed/cWDJoK8zw58"></iframe>
          </Container>
        </div>
        <Container fluid>
        
        < button onClick={postComment}> Click me to post comment</button>
        <Comment comments={comments} postReply={postReply} deleteComment={deleteComment} putComment={putComment} />
        </Container>

      </div>

    );
}

export default App;






