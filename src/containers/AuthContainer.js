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
        this.props.authWithLogin(this.state.username, this.state.password, this.props.requestToken, this.props.history.push);
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

const mapStateToProps = state => ({
    requestToken: selectors.selectToken(state),
    isAuth: selectors.selectAuthStatus(state)
});

const mapDispatchToProps = {
    fetchTokenRequest: actions.fetchTokenRequest,
    getRequestToken: actions.fetchTokenSuccess,
    authWithLogin: actions.loginRequest
};

AuthContainer.propTypes = {
    requestToken: PropTypes.string,
    isAuth: PropTypes.bool.isRequired,
    fetchTokenRequest: PropTypes.func.isRequired,
    getRequestToken: PropTypes.func.isRequired,
    authWithLogin: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);