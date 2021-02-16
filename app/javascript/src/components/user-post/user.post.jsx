import React, {Component, Fragment} from 'react';

class UserPost extends Component {
    constructor(props) {
        super();
        this.state = {

        };
    }


    render() {
        return (
            <Fragment>
                <div className="p-4 input-post shadow">
                        <form>
                            <textarea className="tweet-input mb-3 w-100 px-2 py-1" type="text" /> 
                            <button className="btn-form btn-tweet w-100" type="submit">Tweet</button>
                        </form> 
                </div>
                <div className="posts mt-5 shadow">
                    <div className="no-posts">
                        No Post Yet...
                    </div> 
                </div>
            </Fragment>
        )
    }
}

export default UserPost;