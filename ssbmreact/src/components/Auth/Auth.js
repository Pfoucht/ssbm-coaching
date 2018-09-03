import React, { Component } from 'react';
import styles from './Auth.css';
import { Link } from 'react-router-dom';
import HeadingThick from '../UI/Headings/HeadingThick/HeadingThick';

class Auth extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        transformed: !this.props.navOpen
    }

    closeHandler = () => {
        this.setState({
            transformed: true
        })
    }

    render(){
        let modalClasses = "authContainer";

        if (this.props.navOpen) {
            modalClasses = "authContainer slidedRight"
        }

        return (
            <div className={modalClasses}>
                <span className="close" onClick={this.props.onClick}>x</span>
                <HeadingThick>Sign up</HeadingThick>
                <span>Already have an account?</span>
                <form>
                    <input className="authInput" placeholder="Username" type="text"/>
                    <input className="authInput" placeholder="Email" type="text"/>
                    <input className="authInput" placeholder="Password" type="text"/>
                    <button className="authBtn" type="submit">Sign up</button>
                </form>

                <div className="orContainer">
                    <span className="line"></span>
                    <div className="or">or sign in with</div>
                </div>
                <button className="oAuthBtn">
                <img className="oAuthIcon" src="https://image.flaticon.com/teams/slug/google.jpg"/>
                Google Account</button>
                <button className="oAuthBtn">
                    <img 
                    className="oAuthIcon" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7W9tq9cTBmmGW9jiOzG4Tmw-0Am0MxtjLHy-pdJKuQ9ol1d0"
                    />
                    Facebook Account
                </button>
            </div>
        );
    }
}

export default Auth;;