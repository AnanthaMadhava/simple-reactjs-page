import React, { Component } from 'react';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: ''
        }
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validate = () => {
        let isError = false;

        const errors = {
            usernameError: '',
            passwordError: ''
        };

        // if(this.state.username.length < 5) {
        //     isError = true;
        //     errors.usernameError = 'Username needs to be atleast 5 characters';
        // }

        // if(this.state.password === '') {
        //     isError = true;
        //     errors.passwordError = 'Enter Your password';
        // }

        this.setState({
        ...this.state,
        ...errors
        });

        return isError;
    }

    onSubmit = e => {
        e.preventDefault();

        const err = this.validate();
        console.log("hi");

        if(!err) {
            console.log(this.state);
            this.props.history.push('/Learner');
        }
    } 

    render() {
        return (
            <div className="login-form">
                <form onSubmit={e => this.onSubmit(e)}>
                    <div className="text-center">Login</div>
                    <div className="login">
                        <div className="form-group">
                            <input type="text" name="username" value={this.state.username} onChange={e => this.change(e)} placeholder="Username" />
                            <div className="error">{this.state.usernameError}</div>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" value={this.state.password} onChange={e => this.change(e)} placeholder="Password" />
                            <div className="error">{this.state.passwordError}</div>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn-primary" value="Login"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;