import React, { Component } from 'react';

import './Nav.css';
import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth/Auth';

class Nav extends Component {
    constructor(props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        console.log("clicked");
        this.props.navClick();
    }

    render() {
        return (
            <div className="main-nav">
                <h1>{JSON.stringify(this.props)}</h1>
                <Logo/>
                <Navigation onClick={this.onClick}/>
                <Auth onClick={this.onClick} navOpen={this.props.navOpen}/>
            </div>
        )
    }
}

export default Nav;