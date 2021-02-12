import React, {Component} from 'react';
import './signup.form.scss';
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
            <form className="signupForm" onSubmit={(e) => e.preventDefault()}>

           
            
            </form>
        );
    }
}


export default SignUpForm;