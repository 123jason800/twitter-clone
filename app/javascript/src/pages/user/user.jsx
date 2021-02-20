import React, {Component} from 'react';
import Loader from '@comp/loader/loader';
import Tweet from '@comp/tweet/tweet';
import uuid from 'react-uuid';

import {handleErrors,safeCredentials} from '@utils/fetchHelper';


class User extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            tweets: [],
            username: null

        };
    }
    getUserTweets = (username) => {
   
        fetch(`/api/user/tweets/${username}`)
        .then(handleErrors)
        .then(res => {
           if (res.success) {
                let {tweets} = res;
                
                this.setState({
                                tweets
                                ,loaded:true
                                ,username
                            });
           }

           else {
             
                this.setState({error: 'Unable to get Tweets',loaded: true});
                
           }
        });
    }

    componentDidMount() {

        const {username} = this.props.match.params;
  

        fetch(`/api/sessions`)
        .then(handleErrors)
        .then(res => {
            if (!res.authenticated) {
                window.location.href = '/';
            }
            else {
              
               this.getUserTweets(res.username);
               
            }
        });

    
    }

    
    deleteTweet = (id) => {

        this.setState({loaded:false});
        fetch(`/api/tweets/${id}`, safeCredentials({
            method: 'DELETE',
        }))
        .then(handleErrors)
        .then(res => {
            if (res.success) {
                this.getUserTweets(this.state.username);
            }
            else {
                throw new Error('Unable to Delete');
            }
        })
        .catch(error => {
            this.setState({error: error.message,loaded: true});
        })
    }


    render () {
        return (
                <div className="container mt-5">
                {this.state.loaded ? 
                    !this.state.tweets.length ? <h1 className="text-center mt-5">No tweets Yet</h1>
                    :
                    <div className="row mt-5">
                        {this.state.tweets.map(tweet => <div key={uuid()}  className="col-12 col-md-4"> <Tweet  deleteTweet={this.deleteTweet} deletable={true} currentUser={this.state.username} key={uuid()} {...tweet} /></div>)}
                    </div>
                   
                    :   
                    <Loader/>
                    
                }
                </div>
        );
    }
}

export default User;