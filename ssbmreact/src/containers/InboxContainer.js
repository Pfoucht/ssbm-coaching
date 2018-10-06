import React, { Component } from 'react';
import Inbox from '../components/Inbox/Inbox';

class InboxContainer extends Component {
    state = {
        messages: [
            {
                username: 'CF',
                name: 'CamHeichou',
                date: 'Sep 31, 7:30',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                username: 'YT',
                name: 'YamiTamashi',
                date: 'Oct 02, 9:30',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took."
            },
            {
                username: 'CF',
                name: 'CamHeichou',
                date: 'Oct 02, 10:30',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy."
            },
            {
                username: 'YT',
                name: 'YamiTamashi',
                date: 'Oct 04, 8:30',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it."
            },  
            {
                username: 'CF',
                name: 'CamHeichou',
                date: 'Oct 05, 5:30',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },                      
        ]
    }


    sendMessageHandler = (message) => {
        this.setState(prevState => {
            let arr = [...prevState.messages];
            arr.push(message);
            return {
                messages: arr
            };
        })
    }

    render(){
        return (
            <Inbox sendMessage={this.sendMessageHandler} messages={this.state.messages}/>
        );
    }
}

export default InboxContainer;

