import React, {Component} from 'react';
import styles from './Inbox.css';
import Messages from './Messages/Messages';
import Conversations from './Conversations/Conversations';

class Inbox extends Component {

    state = {
        
    }

    componentDidMount() {
        if (this.props.convoShown) {
            let objDiv = document.getElementById("msgContainer");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    }

    sendMsgHandler = msg => {
        this
            .props
            .sendMessage(msg);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.convoShown) {
            if (prevProps.messages !== this.props.messages) {
                let objDiv = document.getElementById("msgContainer");
                objDiv.scrollTop = objDiv.scrollHeight;
            }
        }
    }

    selectConvoHandler = (num) => {
        this
            .props
            .chooseConvo(num);
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Conversations
                        selectConvoHandler={this.selectConvoHandler}
                        convoIndex={this.props.convoIndex}/>
                    <div className={styles.messages}>
                        <Messages
                            send={this.sendMsgHandler}
                            messages={this.props.messages}
                            convoShown={this.props.convoShown}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default Inbox;