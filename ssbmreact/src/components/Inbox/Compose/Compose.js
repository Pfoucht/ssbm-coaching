import React, { Component } from 'react';
import styles from './Compose.css';
import {FaPaperclip} from 'react-icons/fa'
import { IconContext } from 'react-icons';

class Compose extends Component {
    state = {

    }

    render(){
        return (
            <div>
                <textarea className={styles.textarea}/>
                <div className={styles.composeFooter}>
                    <div>
                        <IconContext.Provider value={{color: '#999', size: '1rem'}}>
                        <div>
                            <FaPaperclip/>
                        </div>
                        </IconContext.Provider>   
                    </div>

                    <div>
                        <span className={styles.send}>Send</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Compose;