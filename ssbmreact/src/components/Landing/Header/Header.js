import React from 'react';
import styles from './Header.css';

const header = props => (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <h1 className={styles.headingBig}>Smash Bros Coaching</h1>
                <h3 className={styles.headingMedium}>Find coaches.   Level up.  Compete.</h3>
                <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className={styles.btn}>Sign up</button>
            </div>
            <div className={styles.containerRight}>
                <img className={styles.headerImg} src="https://pre00.deviantart.net/0c7a/th/pre/i/2015/269/6/5/fire_emblem__marth_by_hakuramen-d9b1y6v.png"/>
            </div>
        </div>
    </header>   

);

export default header;