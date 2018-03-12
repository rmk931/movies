import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../ducks/auth-duck/Actions';
import * as selectors from '../ducks/auth-duck/Selectors';


class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>Username:
                    <input type="text" value={this.props.username} name='username' onChange={this.props.handleChange}/>
                </label>

                <label>Password:
                    <input type="password" value={this.props.password} name='password' onChange={this.props.handleChange}/>
                </label>

                <input type="submit" value="Submit" className="submit-btn"/>
            </form>
        );
    }

};

Auth.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func
};

export default Auth;