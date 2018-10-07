import React, { Component } from 'react';
import styles from './Compose.css';
import {FaPaperclip} from 'react-icons/fa'
import { IconContext } from 'react-icons';

class Compose extends Component {
    state = {
        content: ''
    }

    sendMessage = () => {
        this.props.sendMessage(
            {
                username: 'CF',
                name: 'CamHeichou',
                date: 'Jan 01, 10:30',
                content: this.state.content
            }
        );
        this.setState({
            content: ''
        })
    }

    render(){
        return (
            <div>
                <textarea className={styles.textarea} value={this.state.content} onChange={(e) => this.setState({content: e.target.value})}/>
                <div className={styles.composeFooter}>
                    <div>
                        <IconContext.Provider value={{color: '#999', size: '1rem'}}>
                        <div>
                            <FaPaperclip/>
                        </div>
                        </IconContext.Provider>   
                    </div>

                    <div>
                        <span onClick={this.sendMessage} className={styles.send}>Send</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Compose;