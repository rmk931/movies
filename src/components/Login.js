import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../ducks/auth-duck/Actions';
import * as selectors from '../ducks/auth-duck/Selectors';


class Login extends React.Component {
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
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.props.login(this.state);
        event.preventDefault();
    }

    render() {
        console.log(this.props.isAuth);
        console.log(this.props.requestToken);
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
    requestToken: PropTypes.string,
    isAuth: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchTokenRequest: PropTypes.func.isRequired,
    getRequestToken: PropTypes.func.isRequired,
    login: PropTypes.func
};

const mapStateToProps = state => ({
    requestToken: selectors.selectToken(state),
    isAuth: selectors.selectAuthStatus(state),
    error: selectors.selectError(state)
});

// const mapDispatchToProps = dispatch => ({
//     fetchTokenRequest: () => dispatch(actions.fetchTokenRequest()),
//     authWithLogin: (username, password, requestToken) => dispatch(actions.loginRequest(username, password, requestToken))
// });

const mapDispatchToProps = {
    fetchTokenRequest: actions.fetchTokenRequest,
    getRequestToken: actions.fetchTokenSuccess,
    authWithLogin: actions.loginRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);