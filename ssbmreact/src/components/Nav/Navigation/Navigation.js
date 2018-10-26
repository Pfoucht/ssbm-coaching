import React, { Component } from 'react';
import styles from './Navigation.css';
import { Link } from 'react-router-dom';

const pic = require('../../../assets/dakota.jpg');

class Navigation extends Component {


    render(){
        let nav = (
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/browse" className={styles.link} >Browse</Link>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} onClick={() => this.props.onClick('login')}>Sign In</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.linkBtn} onClick={() => this.props.onClick('register')} href="#">Join</a>
                </li>
            </ul>
        )
        if(this.props.isAuthenticated){
            nav = (
                <ul className={styles.list}>
                <li className={styles.item}>
                <Link to="/" className={styles.link} >Home</Link>
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
                        <ul className={styles.hoverList}>
                            <li className={styles.hoverItem}>
                                <Link to="/profile" className={styles.hoverLink}>My Profile</Link>
                            </li>
                            <li className={styles.hoverItem}>
                                <Link to="/profile" className={styles.hoverLink}>Coaching Gigs</Link>
                            </li>
                            <li className={styles.hoverItem}>
                                <Link to="/settings" className={styles.hoverLink}>Settings</Link>
                            </li>
                            <li className={styles.hoverItem}>
                                <Link to="/help" className={styles.hoverLink}>Help</Link>
                            </li>
                            <li className={styles.hoverItemBorder} onClick={this.props.logout}>
                                <span className={styles.hoverLink} >Log out</span>
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
 
}

export default Navigation;