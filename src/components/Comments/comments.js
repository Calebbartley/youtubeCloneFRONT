import React, { useState, useRef } from 'react';
import cn from "classnames"
import "./comments.css"
const INITIAL_HEIGHT = 110;

const Comment = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [commentValue, setCommentValue] = useState("");

    const outerHeight = useRef(INITIAL_HEIGHT);
    const textRef = useRef(null);
    const containerRef = useRef(null);

    const onExpand = () => {
    if (!isExpanded) {
        outerHeight.current = containerRef.current.scrollHeight;
        setIsExpanded(true);
        }
    }

    const onChange = (e) => {
        setCommentValue(e.target.value);
	}

    const onClose = () => {
        setCommentValue("");
        setIsExpanded(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('send the form data somewhere')
    }

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

