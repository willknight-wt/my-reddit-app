import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';


const Post = ({ title, author, content, upvotes, comments }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <p>{content}</p>
            </div>
            <div>
                <span>Upvotes: {upvotes}</span>
                <FontAwesomeIcon icon={faThumbsUp} />
                
            </div>
            <div>
                <span>Comments: {comments}</span>
                <FontAwesomeIcon icon={faComment} />
            </div>
        </div>
    )
}

export default Post;