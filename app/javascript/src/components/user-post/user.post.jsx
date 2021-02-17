import React, {Component, Fragment} from 'react';
import uuid from 'react-uuid';
import Loader from '../loader/loader';
import Tweet from '../../components/tweet/tweet';




const  UserPost = ({username,tweets,loaded,deleteTweet}) => {
    
        return (
            <Fragment>
               
                <div className="posts mt-5 pb-5">
                    {!loaded ? <Loader />
                    :
                    tweets.length ?
                    <div className="posts">
                    {tweets.map(tweet => <Tweet deleteTweet={deleteTweet} deletable={username === tweet.username} currentUser={username} key={uuid()} {...tweet} />)}
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