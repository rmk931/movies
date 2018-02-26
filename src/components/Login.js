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


    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.pro}>
                <label>Username:
                    <input type="text" value={this.state.username} onChange={(e) => this.handleChangeUsername(e)} />
                </label>

                <label>Password:
                    <input type="text" value={this.state.password} onChange={(e) => this.handleChangePassword(e)} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }

};

Login.propTypes = {
    login: PropTypes.func
};