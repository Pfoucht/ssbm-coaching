import React from 'react';
import styles from './Landing.css';
import Header from './Header/Header';
import Benefits from './Benefits/Benefits';
import Auth from '../Auth/Auth';

const landing = props => {
    return (
        <div className="landing">
            <Header/>
            <Benefits/>
            <Auth/>
        </div>
    );
}

export default landing;