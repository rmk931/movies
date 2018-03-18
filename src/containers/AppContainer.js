import React from 'react';
import ReactDOM from 'react-dom';
import { BrowseRouter, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import MovieItemContainer from '../containers/MovieItemContainer';
import HomePage  from '../components/HomePage';

import MoviesContainer from '../containers/MoviesContainer.js';

import AuthContainer from './AuthContainer';
import { PrivateRoute } from '../components/PrivateRoute';

import * as actions from '../ducks/auth-duck/Actions';
import * as selectors from '../ducks/auth-duck/Selectors';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar 
                    username={this.props.username} 
                    isAuth={this.props.isAuth}
                    logout={this.props.logout}
                />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={AuthContainer}/>
                    <Switch>
        <PrivateRoute 
            exact 
            path="/movies"
            component={MoviesContainer}
            isAuth={this.props.isAuth}    
        />
        <PrivateRoute
            path="/movies/:id"
            component={MovieItemContainer}
            isAuth={this.props.isAuth}
        />
    </Switch>
                </Switch>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuth: selectors.selectAuthStatus(state),
    username: selectors.selectUsername(state)
});

const mapDispatchToProps = {
    logout: actions.logout   
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));