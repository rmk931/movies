import React from 'react';

import NavBar from "./NavBar";
import { MaterialNavBar } from './MaterialNavBar.js';

import PropTypes from 'prop-types';

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: ''
            }
        }
    }

    componentDidMount() {
        this.setState({user: this.props.fetchUser()});
    }

    render() {
        return (
            <NavBar user={this.state.user}/>
        );
    }

};

App.propTypes = {
    fetchUser: PropTypes.func
};


