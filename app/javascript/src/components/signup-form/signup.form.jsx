import React, {Component} from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super();
        this.state = {
            email:'',
            username:'',
            password: '',
        }
    }

    render() {
        
        return (
            <form className="signup-form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button className="btn-form mt-4">Sign Up</button>
            </form>
        );
    }
}


export default SignUpForm;