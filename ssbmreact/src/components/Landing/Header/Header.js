import React from 'react';
import styles from './Header.css';

const header = props => (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.row}>
                <h1 className={styles.heading}>Smash Bros Coaching</h1>
                <h2 className={styles.subHeading}>Find coaches.   Level up.  Compete.</h2>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a className={styles.btn}>Sign up</a>
            </div>
        </div>
    </header>   
);

export default header;