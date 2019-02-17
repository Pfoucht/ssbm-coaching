import React from 'react'
import styles from './ReviewComplete.css';

const reviewComplete = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
            <h5 className={styles.header}>Thanks for helping our community!</h5>
            <p className={styles.span}>Your review will be published within 24hours.</p>

            <div className={styles.preview}>
                <div>CF</div>
                <div>HERES THE REVIEW TEXT</div>
            </div>
            </div>
        </div>
    );
}

export default reviewComplete;