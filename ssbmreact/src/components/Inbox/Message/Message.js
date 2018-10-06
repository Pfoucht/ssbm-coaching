import React from 'react';
import styles from './Message.css';

const message = props => {
    return (
        <div className={styles.message}>
            <div>
                <span className={styles.profile}>CF</span>
            </div>
            <div>
                <div className={styles.header}>
                    <strong className={styles.msgName}>CamHeichou</strong>
                    <span className={styles.msgDate}>Oct 02, 07:15</span>
                </div>
                <div className={styles.userContent}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    );
}

export default message;