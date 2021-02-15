import React, {Component} from 'react';
import { safeCredentials,handleErrors } from '../../../utils/fetchHelper';
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
    
    createSession = (username,password) => {
        fetch(`/api/sessions`, safeCredentials({
            method: 'POST',
            body: JSON.stringify({
            user: {
                password,
                username,
            }
            })
        }))
        .then(handleErrors)
        .then(res => {
            console.log(res);
            if (res.success) {
                console.log('huh');
                window.location.href = '/dashboard';
            }
            else {
                throw new Error('unable to login');
            }
        })
        .catch(error => {
            this.props.setError(error.message);
        })
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
          .then(handleErrors)
          .then(res => {
            if (res.success) {
                this.createSession(username,password);
            }
            else {
                throw new Error('invalid');
            }
          })
          .catch(error => {
              this.props.setError(error.message);
          })
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