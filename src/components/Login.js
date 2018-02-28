import React from 'react';

import PropTypes from 'prop-types';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }


    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.props.login(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Username:
                    <input type="text" value={this.state.username} name='username' onChange={(e) => this.handleChange(e)} className="input-username"/>
                </label>

                <label>Password:
                    <input type="text" value={this.state.password} name='password' onChange={(e) => this.handleChange(e)} className="input-password"/>
                </label>

                <input type="submit" value="Submit" className="submit-btn"/>
            </form>
        );
    }

};

Login.propTypes = {
    login: PropTypes.func
};