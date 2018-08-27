import React, { Component } from 'react';
import './Nav.css';
import Logo from './Logo';
import Navigation from './Navigation';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-nav">
                <Logo/>
                <Navigation/>
            </div>
        )
    }
}

export default Nav;