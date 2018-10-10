import React from 'react';
import styles from './Navigation.css';
import { Link } from 'react-router-dom';

const pic = require('../../../assets/dakota.jpg');

const Navigation = (props) => {
    let nav = (
        <ul className={styles.list}>
        <li className={styles.item}>
            <a className={styles.link} onClick={props.onClick}>Sign In</a>
        </li>
        <li className={styles.item}>
            <a className={styles.link} href="/">Register</a>
        </li>
    </ul>
    )
    if(props.isAuthenticated){
        nav = (
            <ul className={styles.list}>
            <li className={styles.item}>
            <Link to="/" className={styles.link} onClick={props.onClick}>Home</Link>
            </li>            
            <li className={styles.item}>
            <Link to="/browse" className={styles.link} >Browse</Link>
            </li>
            <li className={styles.item}>
                <Link to="/inbox" className={styles.link} >Messages</Link>
            </li>
            <li className={[styles.item, styles.profile].join(' ')}>
                <img src={pic} className={styles.pic} />
                <div className={styles.hoverBox}>
                    <div className={styles.triangle}></div>
                    <ul className={styles.hoverList}>
                        <li className={styles.hoverItem}>
                            <Link to="/profile" className={styles.hoverLink}>My Profile</Link>
                        </li>
                        <li className={styles.hoverItem}>
                            <Link to="/settings" className={styles.hoverLink}>Settings</Link>
                        </li>
                        <li className={styles.hoverItem}>
                            <Link to="/help" className={styles.hoverLink}>Help</Link>
                        </li>
                        <li className={styles.hoverItemBorder}>
                            <span className={styles.hoverLink}>Logout</span>
                        </li>                                                
                    </ul>
                </div>
            </li>
        </ul>
        );
    }
    return (
        <nav>
            {nav}
        </nav>
    )
}

export default Navigation;