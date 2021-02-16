import React, {Component, Fragment} from 'react';
import uuid from 'react-uuid';

const Tweet = ({username,message}) => (
    <div className="post-tweet shadow p-3 mb-5 ">
        <h3 className="userpost-name mb-3">{username} <span className="userpost-alias">@{username}</span></h3>
        {message}
    </div>
)


const UserPost = ({handleChange,handleSubmit,message,tweets}) => {
 
     return (
            <Fragment>
                <div className="p-4 input-post shadow">
                        <form onSubmit={handleSubmit}>
                            <textarea onChange={handleChange} className="tweet-input mb-3 w-100 px-2 py-1" type="text" value={message}/> 
                            <button className="btn-form btn-tweet" type="submit">Tweet</button>
                        </form> 
                </div>
                <div className="posts mt-5 ">
                    {tweets.length? 
                    <div className="posts">
                    {tweets.map(tweet => <Tweet key={uuid()} {...tweet} />)}
                    </div>
                    :
                    <div className="no-posts shadow">
                    No Post Yet...
                    </div> 
                    }
                 
                   
                </div>
            </Fragment>
        );
 
}

export default UserPost;