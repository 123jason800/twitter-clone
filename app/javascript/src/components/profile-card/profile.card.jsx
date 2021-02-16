import React,{Component} from 'react';

const  ProfileCard = (props) => {



        return (
        <div className= "profile-card text-center shadow p-3 mb-5">
            <div className="name-field pr-3">
                <h3 className="userpost-name">Username</h3>
                <p className="userpost-alias">@username</p>
            </div>
            <div className="tweet-number">
                Tweets:
                <div className="tweet-amt">
                    0
                </div>
            </div>
        </div>
        );
 
}


export default ProfileCard;