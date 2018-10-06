import React from 'react';
import styles from './Contact.css';

const contact = props => (
    <div className={[styles.contact, props.active ? styles.active : null].join(' ')}>
        <span>
            <span className={styles.profile}>{props.username}</span>
        </span>
        <span className={styles.contactInfo}>
            <strong className={styles.contactName}>{props.name}</strong>
            <p className={styles.trunc}>{props.trunc}</p>
        </span>
        <span className={styles.date}>
            {props.date}
        </span>
    </div>
)

export default contact;