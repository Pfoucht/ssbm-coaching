import React from 'react';
import styles from './Messages.css';
import {FaEllipsisH, FaCaretDown} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import Message from './Message/Message';
import Compose from './Compose/Compose';
import About from './About/About';


const messages = props => {

    let inboxMsgs = props.messages.map(el => {
        return <Message username={el.username} name={el.name} date={el.date} content={el.content}/>
    });

    if(props.convoShown){
        return (
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
                        <div className={styles.msgContainer} id="msgContainer">
                            {inboxMsgs}
                        </div>
                        <footer className={styles.footer}>
                            <Compose sendMessage={props.send}/>
                        </footer>
                    </div>
                    <div className={styles.msgBottomRight} style={{textAlign: 'center'}}>
                        <About/>
                    </div>
            </div>
        </div>
        )
    }else{
        return (
            <div className={styles.noMsgSelectedWrapper}>
                <img className={styles.noMsgSelectedImg} src="data:image/png;base64,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" />
                <h2 className={styles.noMsgSelectedHeader}>Select a Conversation</h2>
                <p className={styles.noMsgSelectedPara}>Try selecting a conversation or searching someone specific.</p>
            </div>
        )
    }

}

export default messages;