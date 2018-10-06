import React from 'react';
import styles from './About.css';

const about = props => (
    <div>
        <strong>About</strong>
        <span className={styles.profileAbout} style={{margin: '20px auto'}}>YT</span>
        <span>YamiTamashi</span>
        <ul className={styles.list}>
            <li className={styles.item}>
                <span>Twitter</span>
                <strong>@YummyT</strong>
            </li>                            
            <li className={styles.item}>
                <span>Game</span>
                <strong>Overwatch</strong>
            </li>
            <li className={styles.item}>
                <span>Rank</span>
                <strong>Grandmaster</strong>
            </li>

            <li className={styles.item}>
                <span>From</span>
                <strong>Washington</strong>
            </li>
        </ul>
    </div>
)

export default about;