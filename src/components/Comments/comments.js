import React, { useState } from "react";
import "./comments.css"

// const addComment=() => {
//   const [comment, setComment] = useState("");

//   const handleSubmit = (evt) => {
//       evt.preventDefault();
//       alert(`Submitting search ${comment}`)
//   }
// }
const Comment = () => {

    return (
        <div>
            <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">User Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Text"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Add a public comment...</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </form>
        </div>
    );
};

export default Comment;

