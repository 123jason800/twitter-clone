import React,{useEffect, useState, Fragment} from 'react';
import Loader from '@comp/loader/loader';
import Tweet from '@comp/tweet/tweet';
import uuid from 'react-uuid';


import {handleErrors} from '@utils/fetchHelper';

const UserPublic = props => {
  
    const [username,setUserName] = useState('');
    const [loaded,setLoaded] = useState(false);
    const [error,setError] = useState(false);
    const [tweets,setTweets] = useState([]);
    useEffect( () => {
        let {username} = props.match.params;
        fetch(`/api/user/tweets/${username}`)
        .then(handleErrors)
        .then(res => {
        if (res.success) {
            setUserName(username);
            setTweets(res.tweets);
            setLoaded(true);
        }

        else {
            setLoaded(true);
            setError(true);
        }
        });
    },[]);
         

  
    return (
      
        <div  className="container mt-5">
           
        {loaded ? 
            error ? <h1 className="text-center mt-5">Unable to get Tweets. Maybe User does not exist?</h1>
            :
            !tweets.length ?  
            <Fragment>
                <div style={{width: '250px', height: '150px'}} className="profile-card px-3 py-4 text-center shadow d-flex mx-auto">
                    <div className="name-field pr-3 col-6">
                        <h3 className="userpost-name">{username}</h3>
                        <p className="userpost-alias mb-0">@{username}</p>
                    </div>
                    <div className="tweet-number col-6">
                        Tweets:
                        <div className="tweet-amt">
                            {tweets.length}
                        </div>
                    </div>
                </div><h1 className="text-center mt-5">No Tweets Yet.</h1>
            </Fragment>
            :
            <Fragment>
                <div style={{width: '250px', height: '150px'}} className="profile-card px-3 py-4 text-center shadow d-flex mx-auto">
                    <div className="name-field pr-3 col-6">
                        <h3 className="userpost-name">{username}</h3>
                        <p className="userpost-alias mb-0">@{username}</p>
                    </div>
                    <div className="tweet-number col-6">
                        Tweets:
                        <div className="tweet-amt">
                            {tweets.length}
                        </div>
                    </div>
                </div>
                <div className=" h-100 mt-5 ">
                        {tweets.map(tweet => <div key={uuid()} className="mx-auto col-md-6 col-12"> <Tweet deletable={false} currentUser={username} key={uuid()} {...tweet} /></div>)}
            
                </div>
            </Fragment>
            :   
            <Loader/>
            
        }
        </div>
            

    )
}

export default UserPublic;