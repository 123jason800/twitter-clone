import React, {Component} from 'react';
import { safeCredentials, handleErrors,createSession } from '../../../utils/fetchHelper';
class SignUpForm extends Component {
    constructor(props) {
        super();
        this.state = {
            email:'',
            username:'',
            password: '',
            term: true,
        }
    }

    handleChange = (e) => {
        const {value} = e.target;
        switch(e.target.id) {
            case 'email':
                this.setState({email:value});
                break;
            case 'username':
                this.setState({username:value});
                break;
            case 'password':
                this.setState({password: value});
                break;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {username, email, password, term} = this.state;

        fetch(`/api/users`, safeCredentials({
            method: 'POST',
            body: JSON.stringify({
              user: {
                email,
                password,
                username,
                term
              }
            })
          }))
          .then(res => {
            if (res.success) {
                createSession(username,password);
            }
            else {
                
            }
          })
          .then(handleErrors);
          
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit} className="signup-form">
                <label htmlFor="username">Username</label>
                <input onChange={this.handleChange} type="text" id="username" />
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} type="email" id="email" />
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} type="password" id="password" />
                <button className="btn-form mt-4">Sign Up</button>
            </form>
        );
    }
}


export default SignUpForm;