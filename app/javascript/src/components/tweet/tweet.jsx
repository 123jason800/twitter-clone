import React from 'react';


const Tweet = ({deletable,username,message,size,tweetID, deleteTweet,image}) => {
    return(
    <div className={` ${size ? 'post-tweet-'+size: 'post-tweet'} shadow p-3 mb-5 `}>
        <h3 className="userpost-name mb-3">{username} <span className="userpost-alias">@{username}</span></h3>
        <p>{message}</p>
        {image && <img src={image} className="img-fluid" />}
        {deletable && <a onClick={() => deleteTweet(tweetID)} className="tweet-delete">Delete</a>}
    </div>
    );
}

export default Tweet;