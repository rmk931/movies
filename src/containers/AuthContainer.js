import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Auth from '../components/Auth';

import * as actions from '../ducks/auth-duck/Actions';
import * as selectors from '../ducks/auth-duck/Selectors';

class AuthContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        this.props.fetchTokenRequest();
    };

    login() {
        this.props.authWithLogin(this.state.username, this.state.password, this.props.requestToken);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit(e) {
        this.login();
        e.preventDefault();
    }

    render() {
        return (
            <Auth 
                username={this.state.username}
                password={this.state.password}
                handleChange={(e) => this.handleChange(e)}
                handleSubmit={(e) => this.handleSubmit(e)}  
            />
        );
    }

};

AuthContainer.propTypes = {
    requestToken: PropTypes.string,
    isAuth: PropTypes.bool,
    error: PropTypes.string,
    fetchTokenRequest: PropTypes.func,
    getRequestToken: PropTypes.func,
    authWithLogin: PropTypes.func
};

const mapStateToProps = state => ({
    requestToken: selectors.selectToken(state),
    isAuth: selectors.selectAuthStatus(state),
    error: selectors.selectError(state)
});

const mapDispatchToProps = {
    fetchTokenRequest: actions.fetchTokenRequest,
    getRequestToken: actions.fetchTokenSuccess,
    authWithLogin: actions.loginRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);