import React from 'react';
import styles from './Landing.css';
import Header from './Header/Header';
import Benefits from './Benefits/Benefits';

const landing = props => {
    return (
        <div className="landing">
            <Header/>
            <Benefits/>
        </div>
    );
}

export default landing;