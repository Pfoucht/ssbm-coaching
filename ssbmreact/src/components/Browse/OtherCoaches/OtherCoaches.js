import React from 'react';
import styles from './OtherCoaches.css';


const otherCoaches = props => (
    <div className={styles.container}>

        <h2 className={styles.title}>Recommended Coaches</h2>
        <div className={styles.flexbox}>
            <div className={styles.card}>1</div>
            <div className={styles.card}>2</div>
            <div className={styles.card}>3</div>
            <div className={styles.card}>4</div>
        </div>
        
    
    </div>
);

export default otherCoaches;