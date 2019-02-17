import React from 'react'
import styles from './Nav.css';
import {FaCaretDown, FaCaretRight, FaMapMarker, FaMapMarkerAlt, FaCheckCircle} from 'react-icons/fa'

import {IconContext} from 'react-icons';

const nav = props => {

    let active = (
        <span className={styles.navCurrent}>
            <IconContext.Provider
                value={{
                color: '#fff',
                size: '14px'
            }}>
                <FaMapMarkerAlt/>
            </IconContext.Provider>
        </span>
    );

    let complete = (
        <span className={styles.navCurrent}>
            <IconContext.Provider
                value={{
                color: '#fff',
                size: '14px'
            }}>
                <FaCheckCircle/>
            </IconContext.Provider>
        </span>       
    )

    return (
        <div className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    {props.step === 1 ? active : props.highestStep > 1 ? complete : <span className={styles.navNum}>1</span> }
                    <span>Overview</span>
                    <span className={styles.navCaret}>
                        <IconContext.Provider
                            value={{
                            color: '#777',
                            size: '14px'
                        }}>
                            <FaCaretRight/>
                        </IconContext.Provider>
                    </span>
                </li>
                <li className={styles.navItem}>
                {props.step === 2 ? active : props.highestStep > 2 ? complete : <span className={styles.navNum}>2</span> }
                <span>Description</span>
                    <span className={styles.navCaret}>
                        <IconContext.Provider
                            value={{
                            color: '#777',
                            size: '14px'
                        }}>
                            <FaCaretRight/>
                        </IconContext.Provider>
                    </span>
                </li>
                <li className={styles.navItem}>
                {props.step === 3 ? active : props.highestStep > 3 ? complete : <span className={styles.navNum}>3</span> }
                <span>Cover Photo</span>
                <span className={styles.navCaret}>
                <IconContext.Provider
                    value={{
                    color: '#777',
                    size: '14px'
                }}>
                    <FaCaretRight/>
                </IconContext.Provider>
            </span>
            </li>
                <li className={styles.navItem}>
                {props.step === 4 ? active : props.highestStep > 4 ? complete : <span className={styles.navNum}>4</span> }
                    <span>Publish</span>
                </li>

            </ul>
        </div>
        )
        };

export default nav;