import React from 'react';
import {Link} from 'react-router-dom';

const Tweet = ({deletable,username,message,size,tweetID, deleteTweet,image}) => {
    return(
    <div className={` ${size ? 'post-tweet-'+size: 'post-tweet'} shadow p-3 mb-5 `}>
        {size ? null :  <Link  to={`/user/${username}`} className="userpost-name">{username} <span className="userpost-alias">@{username}</span></Link>
        }
        <p>{message}</p>
        {image && <img src={image} className="img-fluid" />}
        {deletable && <a onClick={() => deleteTweet(tweetID)} className="tweet-delete">Delete</a>}
    </div>
    );
}

export default Tweet;