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
                <img className={styles.headerImg} src="http://vignette99.wikia.nocookie.net/fireemblem/images/3/31/Marth_Heroes_2.png/revision/latest?cb=20170120194457"/>
            </div>
        </div>
    </header>   

);

export default header;