import React, { Component } from 'react';
import styles from './Inbox.css';
import {FaEllipsisH, FaCaretDown} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import Message from './Message/Message';
import Compose from './Compose/Compose';
import Contact from './Contact/Contact';
import About from './About/About';

class Inbox extends Component {

    componentDidMount(){
        let objDiv = document.getElementById("msgContainer");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    sendMsgHandler = msg => {
        this.props.sendMessage(msg);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.messages !== this.props.messages){
            let objDiv = document.getElementById("msgContainer");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    }


    render(){
        let messages = this.props.messages.map(el => {
            return <Message username={el.username} name={el.name} date={el.date} content={el.content}/>
        })
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
                        <Contact username="BG" name="Bill Gates" date="Aug 31" trunc="Cam, I am considering building..."/>
                        <Contact active={true} username="YT" name="YamiTamashi" date="Sep 26" trunc="Would you consider coaching..."/>
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
                        <div className={styles.msgContainer} id="msgContainer">
                            {messages}
                        </div>
                        <footer className={styles.footer}>
                            <Compose sendMessage={this.sendMsgHandler}/>
                        </footer>
                        </div>
                        <div className={styles.msgBottomRight} style={{textAlign: 'center'}}>
                            <About/>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}
}
export default Inbox;