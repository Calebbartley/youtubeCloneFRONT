import React from "react";
import "./CommentsList.css"
import Comment from "../Comment/Comment";


const CommentsList = ({comments, deleteComment, putComment, postReply}) => {
   




    return (
        <div>
            <h3>
            {comments.map((comment, index) => <Comment comment={comment} index={index} postReply={postReply} deleteComment={deleteComment} putComment={putComment}/>)}
            {/*postId.map((postId, index)=> <li key={index}>{postId.userName}{postId.userComment}</li>)*/}
            </h3>
            
        </div>
        

    );
};


export default CommentsList;