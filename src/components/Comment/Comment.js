import React, { useState } from 'react';


const Comment = ({comment, deleteComment, putComment, index, postReply}) => {
    const [userComment, setUserComment] = useState('');

    const handleChange = (event) => {
        setUserComment(event.target.value);
    }

    return (

        <ul key={index}> {Comment.userName} {Comment.userComment}  <button  onClick={() => deleteComment(comment._id)}> Delete💢</button> <button onClick={() => putComment(comment._id)} >Edit Comment</button>
          <form onSubmit={()=> postReply(comment._id, "Replier", userComment)}>
            <input onChange={ handleChange } className="form-floating" className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" />
              <label for="floatingTextarea2"></label>
              <button type="submit">REPLY</button>
          </form>
        </ul>

    );
}

//this component needs
//reply form: needs a handleChange from the slides



export default Comment;