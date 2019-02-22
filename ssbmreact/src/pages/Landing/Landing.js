import React from 'react';
import styles from './Landing.css';
import Header from './Header/Header';
import Benefits from './Benefits/Benefits';

const landing = props => {
    return (
        <div className={styles.landing}>
            <Header/>
            <Benefits/>
        </div>
    );
}

export default landing;