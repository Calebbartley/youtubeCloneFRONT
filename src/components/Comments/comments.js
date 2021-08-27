import React, { useState } from "react";
import "./comments.css"
import Comment from "../Comment/Comment";


const Comments = ({comments, deleteComment, putComment, postReply}) => {




    return (
        <div>
            <ul>

                {comments.map((comment, index) => <Comment comment={comment} index={index} postReply={postReply} deleteComment={deleteComment} putComment={putComment}/>)}
                {/*postId.map((postId, index)=> <li key={index}>{postId.userName}{postId.userComment}</li>)*/}
            </ul>
        </div>
    );
};

export default Comments;

