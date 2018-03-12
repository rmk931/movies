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
        this.props.getRequestToken('48957349759834');
    };

    login() {
        console.log(`Form parameters: ${this.state.username}, ${this.state.password}`);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit(e) {
        this.login();
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

// const mapDispatchToProps = dispatch => ({
//     fetchTokenRequest: () => dispatch(actions.fetchTokenRequest()),
//     authWithLogin: (username, password, requestToken) => dispatch(actions.loginRequest(username, password, requestToken))
// });

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);