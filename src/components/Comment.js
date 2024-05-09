import React from 'react';

const Comment = ({ author, content, upvotes, replies }) => {
    return (
        <div className="comment">
            <div className="comment-header">
                <span className="comment-author">{author}</span>
                <span className="comment-upvotes">{upvotes} upvotes</span>
            </div>
            <p className="comment-content">{content}</p>
            <div className="comment-footer">
                <span className="comment-replies">{replies} replies</span>
                {/* Add a button for replying to the comment */}
                {/* <button>Reply</button> */}
            </div>
        </div>
    );
};

export default Comment;
