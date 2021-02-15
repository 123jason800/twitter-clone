import React, {Component} from 'react';
import {safeCredentials, handleErrors } from '../../../utils/fetchHelper';

class LoginForm extends Component {
    constructor(props) {
        super();
        this.state = {
            username:'',
            password: '',
        }
    }


    
    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        
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
            if (res.success) {
                window.location.href = '/dashboard';
            }
            else {
                throw new Error('invalid-login')
            }
        }).catch((error) => {
       
            this.props.setError(error.message);
        });
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
    
    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit} >
                <label htmlFor="username">Username</label>
                <input onChange={this.handleChange} value={this.state.username} type="text" id="username" />
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} value={this.state.password} type="password" id="password" />
                <button className="btn-form mt-4" type="submit">Login</button>
            </form>
        );
    }
}


export default LoginForm;