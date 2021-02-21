import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import Tweet from '../../components/tweet/tweet';
import uuid from 'react-uuid';


const ProfileCard = ({username,tweets,deleteTweet}) => {
        
       
        let yourTweets = tweets.filter((tweet => tweet.username === username));

        return (
        <Fragment>
            <Link to={`/user/${username}`} className= "profile-card d-flex text-center shadow p-3 mb-3">
                <div className="name-field pr-3 col-6">
                    <h3 className="userpost-name">{username}</h3>
                    <p className="userpost-alias mb-0">@{username}</p>
                </div>
                <div className="tweet-number col-6">
                    Tweets:
                    <div className="tweet-amt">
                        {yourTweets.length}
                    </div>
                </div>
            </Link>
            <div className="your-tweets ">
                <h3 className="text-center mb-3">Recent</h3>
                {yourTweets.slice(0,2).map(tweet => <Tweet deleteTweet={deleteTweet} deletable={true}  size='small' key={uuid()} {...tweet} />)}
            </div>
        </Fragment>
        );
 
}


export default ProfileCard;