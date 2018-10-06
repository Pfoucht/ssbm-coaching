import React from 'react';
import styles from './Inbox.css';
import {FaEllipsisH, FaCaretDown} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import Message from './Message/Message';
import Compose from './Compose/Compose';

const inbox = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.conversations}>
                    <div className={styles.convoTop}>
                        <span className={styles.convoDropdown}>All conversations
                            <IconContext.Provider value={{color: '#777', size: '.75rem'}}>
                            <div>
                                <FaCaretDown/>
                            </div>
                            </IconContext.Provider>   
                    </span>
                    </div>
                    <div className={styles.convoBottom}>
                        <div className={styles.contact}>
                            <span>
                                <span className={styles.profile}>CF</span>
                            </span>
                            <span className={styles.contactInfo}>
                                <strong className={styles.contactName}>CamHeichou</strong>
                                <p className={styles.trunc}>Hey, I have some news...</p>
                            </span>
                            <span className={styles.date}>
                                Sep 26
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.messages}>
                    <div className={styles.msgTop}>
                        <div>
                            <h4 className={styles.convoName}>CamHeichou</h4>
                            <span className={styles.lastOnline}>Last online 12 hrs ago</span>
                        </div>

                        <div>
                            <IconContext.Provider value={{color: '#999', size: '22px'}}>
                            <div>
                                <FaEllipsisH/>
                            </div>
                            </IconContext.Provider>   
                        </div>
                    </div>

                    <div className={styles.msgBottomWrapper}>
                        <div className={styles.msgBottom}>
                        <Message/>
                        <footer className={styles.footer}>
                            <Compose/>
                        </footer>
                        </div>
                        <div className={styles.msgBottomRight} style={{textAlign: 'center'}}>
                            <strong>About</strong>
                            <span className={styles.profileAbout} style={{margin: '20px auto'}}>CF</span>
                            <span>CamHeichou</span>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <span>Twitter</span>
                                    <strong>@CamHeichou</strong>
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
                    </div>
                </div>
            
            </div>
        </div>
    );
}
export default inbox;