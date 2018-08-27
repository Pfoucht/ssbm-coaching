import React from 'react';
import './Landing.css';
//import styles from './Landing.css';
import Header from './Header/Header';
import Benefits from './Benefits/Benefits';

const landing = props => {
    return (
        <div>
            <Header/>
            <Benefits/>
        </div>
    );
}

export default landing;