import React from 'react';
import styles from './Benefits.css';
import { TiMortarBoard, TiSpanner, TiHomeOutline } from 'react-icons/ti';
import { IconContext } from 'react-icons';

import {IoMdHome, IoMdBicycle, IoMdContacts } from 'react-icons/io';

const benefits = props => (
    <div className={styles.benefits}>
        <h1 className={[styles.headingBig, styles.headingBenefit].join(' ')}>Benefits</h1>
        <div className={styles.flexbox}>
            <div className={styles.col}>
                <IconContext.Provider value={{color: '#373737', size: '7rem'}}>
                <div>
                    <IoMdContacts/>
                </div>
             </IconContext.Provider>
                <h5 className={styles.headerSmall}>Connect with top coaches</h5>
                <p className={styles.para}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className={styles.col}>
                <IconContext.Provider value={{color: '#373737', size: '7rem'}}>
                <div>
                    <IoMdBicycle/>
                </div>
                </IconContext.Provider>                
                <h5 className={styles.headerSmall}>Improve your fundamentals</h5>
                <p className={styles.para}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className={styles.col}>
                <IconContext.Provider value={{color: '#373737', size: '7rem'}}>
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

// <img className={styles.iconHolder} src="https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-22-512.png" />


export default benefits;