import React,{Fragment} from 'react';
import Tweet from '../../components/tweet/tweet';
import uuid from 'react-uuid';

const ProfileCard = ({username,tweets,deleteTweet}) => {
        
       
        let yourTweets = tweets.filter((tweet => tweet.username === username));

        return (
        <Fragment>
        <div className= "profile-card d-flex text-center shadow p-3 mb-5">
            <div className="name-field pr-3">
                <h3 className="userpost-name">{username}</h3>
                <p className="userpost-alias">@{username}</p>
            </div>
            <div className="tweet-number">
                Tweets:
                <div className="tweet-amt">
                    {yourTweets.length}
                </div>
            </div>
        </div>
        <div className="your-tweets">
            <h3 className="text-center mb-5">Your Latest Tweets</h3>
            {yourTweets.slice(0,2).map(tweet => <Tweet deleteTweet={deleteTweet} deletable={true}  size='small' key={uuid()} {...tweet} />)}
        </div>
        </Fragment>
        );
 
}


export default ProfileCard;