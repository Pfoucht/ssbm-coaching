import React from 'react';
import styles from './Navigation.css';

const Navigation = (props) => {
    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a className={styles.link} onClick={props.onClick}>Sign In</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="/">Register</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;