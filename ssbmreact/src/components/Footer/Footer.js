import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';

const footer = props => (
    <footer className={styles.footer}>
        <div className={styles.container}>
        <div className={styles.flex}>
            <div className={styles.div}>
                <h4 className={styles.title}>coach.gg</h4>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/create" className={styles.link}>Create Gig</Link></li>
                    <li className={styles.item}><Link to="/browse" className={styles.link}>Browse Gigs</Link></li>
                    <li className={styles.item}><Link to="/about" className={styles.link}>Learn More</Link></li>
                    <li className={styles.item}><Link to="/about" className={styles.link}>Work for Us</Link></li>
                </ul>
            </div>
            <div className={styles.div}>
                <h4 className={styles.title}>Discover</h4>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/browse" className={styles.link}>Games</Link></li>
                    <li className={styles.item}><Link to="/create" className={styles.link}>Coaches</Link></li>
                    <li className={styles.item}><Link to="/create" className={styles.link}>Networks</Link></li>
                </ul>
            </div>
            <div className={styles.div}>
                <h4 className={styles.title}>Social</h4>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/browse" className={styles.link}>Facebook</Link></li>
                    <li className={styles.item}><Link to="/create" className={styles.link}>Twitter</Link></li>
                    <li className={styles.item}><Link to="/create" className={styles.link}>Instagram</Link></li>
                    <li className={styles.item}><Link to="/create" className={styles.link}>Youtube</Link></li>
                </ul>
            </div>
            <div className={styles.div}>
            <h4 className={styles.title}>Help</h4>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/faq" className={styles.link}>FAQ</Link></li>
                <li className={styles.item}><Link to="/help" className={styles.link}>Help Center</Link></li>
                <li className={styles.item}><Link to="/help" className={styles.link}>Suggestions</Link></li>
                <li className={styles.item}><Link to="/contactstaff" className={styles.link}>Contact us</Link></li>
            </ul>
            </div>
        </div>
        <div className={styles.break}></div>
        <p className={styles.credit}>Designed and created by Peyton & Camden.</p>
        </div>
    </footer>
);

export default footer;