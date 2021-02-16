import React, {Component, Fragment} from 'react';
import uuid from 'react-uuid';
import { handleErrors,safeCredentials } from '../../../utils/fetchHelper';
import Loader from '../loader/loader';


const Tweet = ({username,message}) => (
    <div className="post-tweet shadow p-3 mb-5 ">
        <h3 className="userpost-name mb-3">{username} <span className="userpost-alias">@{username}</span></h3>
        {message}
    </div>
)


class UserPost extends Component {
    
    constructor(props) {
        super();
        this.state = {
            tweets: [],
            message: '',
            error: null,
            loaded: false
        };
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({message: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.postTweet(this.state.message);
        this.setState({message: ''});
    }

 
 

    getTweets = () => {
        fetch(`/api/tweets`)
        .then(handleErrors)
        .then(res => {
           if (res.success) {
                let {tweets} = res;
                this.setState({tweets,loaded:true});
           }

           else {
                this.setState({error: 'Unable to get Tweets'});
                
           }
        });
    }


    
    postTweet = (message) => {
        this.setState({loaded:false});
        fetch(`/api/tweets`, safeCredentials({
            method: 'POST',
            body: JSON.stringify({
            tweet: {
               message
            }
            })
        }))
        .then(handleErrors)
        .then(res => {
            if (res.success) {
                this.getTweets();
            }
            else {
                throw new Error('unable to post');
            }
        })
        .catch(error => {
            this.setState({error: error.message});
        })
    }

    
    componentDidMount() {
        this.getTweets();
    }
    
    
    render() {
        return (
            <Fragment>
                <div className="p-4 input-post shadow">
                        <form onSubmit={this.handleSubmit}>
                            <textarea onChange={this.handleChange} className="tweet-input mb-3 w-100 px-2 py-1" type="text" value={this.state.message}/> 
                            <button className="btn-form btn-tweet w-75" type="submit">Tweet</button>
                        </form> 
                </div>
                <div className="posts mt-5 pb-5">
                    {!this.state.loaded ? <Loader />
                    :
                    this.state.tweets.length ?
                    <div className="posts">
                    {this.state.tweets.map(tweet => <Tweet key={uuid()} {...tweet} />)}
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
     
}

export default UserPost;