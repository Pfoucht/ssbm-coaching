import React from 'react';
import styles from './Message.css';

const message = props => {

    return (
        <div className={styles.message}>
            <div>
                <span className={styles.profile}>{props.username}</span>
            </div>
            <div>
                <div className={styles.header}>
                    <strong className={styles.msgName}>{props.name}</strong>
                    <span className={styles.msgDate}>{props.date}</span>
                </div>
                <div className={styles.userContent}>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default message;