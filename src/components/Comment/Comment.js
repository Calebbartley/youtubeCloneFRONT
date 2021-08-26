import React from 'react';
const Comment = ({comment, deleteComment, putComment, index, postReply}) => {
    return ( 
        <li key={index}> {comment.userName} {comment.userComment} <button  onClick={() => deleteComment(comment._id)}> 💢</button> <button onClick={() => putComment(comment._id)} >Edit Comment</button> <button onClick={()=> postReply(comment._id)}>REPLY</button></li>
     );
}
 
export default Comment;