import React from 'react';

const Post = ({ _id, text, timestamp, onDelete }) => (<div className="post">
    <p>{text}</p>
    <p className="timestamp">{timestamp}</p>
    <button className="action-btn edit-btn">Edit</button>
    <button className="action-btn del-btn" onClick={() => onDelete(_id)}>Delete</button>
</div>);

export default Post;