import React from 'react';
import styles from './Benefits.css';
import { TiMortarBoard, TiSpanner, TiHomeOutline } from 'react-icons/ti';
import { IconContext } from 'react-icons';

import {IoMdHome, IoMdBicycle, IoMdContacts } from 'react-icons/io';

const benefits = props => (
    <div className={styles.benefits}>
        <h2 className={[styles.headingBig, styles.headingBenefit].join(' ')}>Benefits</h2>
        <div className={styles.flexbox}>
            <div className={styles.col}>
                <IconContext.Provider value={{color: 'black', size: '7rem'}}>
                <div>
                    <IoMdContacts/>
                </div>
             </IconContext.Provider>
                <h5 className={styles.headerSmall}>Connect with top coaches</h5>
                <p className={styles.para}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className={styles.col}>
                <IconContext.Provider value={{color: 'black', size: '7rem'}}>
                <div>
                    <IoMdBicycle/>
                </div>
                </IconContext.Provider>                
                <h5 className={styles.headerSmall}>Improve your fundamentals</h5>
                <p className={styles.para}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className={styles.col}>
                <IconContext.Provider value={{color: 'black', size: '7rem'}}>
                <div>
                    <IoMdHome/>
                </div>
                </IconContext.Provider>             
                <h5 className={styles.headerSmall}>Centralized learning hub</h5>
                <p className={styles.para}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>                                  
        </div>
    </div>
);

export default benefits;