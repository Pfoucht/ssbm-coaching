import React from 'react';
import styles from './Conversations.css';
import Contact from './Contact/Contact';
import {FaEllipsisH, FaCaretDown, FaSearch} from 'react-icons/fa'
import { IconContext } from 'react-icons';

const conversations = props => {
    return (
        <div className={styles.conversations}>
            <div className={styles.convoTop}>
                <span className={styles.convoDropdown}>All Conversations
                    <IconContext.Provider value={{color: '#777', size: '.75rem'}}>
                    <div>
                        <FaCaretDown/>
                    </div>
                    </IconContext.Provider>   
            </span>
            <span>
                <IconContext.Provider value={{color: '#999', size: '1rem'}}>
                <div>
                    <FaSearch/>
                </div>
                </IconContext.Provider>              
            </span>
            </div>
            <div className={styles.convoBottom}>
                <Contact select={() => props.selectConvoHandler(0)} active={props.convoIndex == 0} username="BG" name="Bill Gates" date="Aug 31" trunc="Cam, I am considering building..."/>
                <Contact select={() => props.selectConvoHandler(1)} active={props.convoIndex == 1}   username="YT" name="YamiTamashi" date="Sep 26" trunc="Would you consider coaching..."/>
            </div>
    </div>
    );
}

export default conversations;