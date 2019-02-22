import React from 'react';
import styles from './Header.scss';

import Link from '../../UI/Link';

const header = props => (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.row}>
                <h1>Smash Bros Coaching</h1>
                <p className={styles.desc}>Lorem Ipsum is simply <a href="/">test link</a> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link href="#" type="btn" className={styles.cta}>Sign up</Link>
                <Link href="#" type="btn" theme="outline">Browse choaches</Link>
            </div>
        </div>
    </header>   
);

export default header;