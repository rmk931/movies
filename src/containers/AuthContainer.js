import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
        this.props.history.push('/movies');
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit(e) {
        this.login();
        this.props.history.push('/movies');
        e.preventDefault();
    }

    render() {
        console.log(this.props.isAuth);
        console.log(this.props.requestToken);
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
    isAuth: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchTokenRequest: PropTypes.func.isRequired,
    getRequestToken: PropTypes.func.isRequired,
    authWithLogin: PropTypes.func.isRequired
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer));