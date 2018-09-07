import React, { Component } from 'react';
import styles from './Auth.css';
import { Link } from 'react-router-dom';
import HeadingThick from '../UI/Headings/HeadingThick/HeadingThick';

class Auth extends Component {

    state = {
        username: "",
        email: "",
        password: ""
        
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.authenticate(
                        this.state.username,
                        this.state.email,
                        this.state.password
                        );
    }

    render(){
        let modalClasses = [styles.authContainer];

        if (this.props.loading){
            modalClasses = [styles.authContainer, styles.loading];
        }
        if (!this.props.navOpen) {
            modalClasses = [styles.authContainer, styles.slidedRight]
        }

        return (
            <div className={modalClasses.join(' ')}>
                <span className={styles.close} onClick={this.props.toggle}>x</span>
                <HeadingThick>Sign up</HeadingThick>
                <span>Already have an account?</span>
                <form onSubmit={this.submitHandler}>
                    <input className={styles.authInput} placeholder="Username" type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                    <input className={styles.authInput} placeholder="Email" type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    <input className={styles.authInput} placeholder="Password" type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                    <button className={styles.authBtn} type="submit">Sign up</button>
                </form>

                <div className={styles.orContainer}>
                    <span className={styles.line}></span>
                    <div className={styles.or}>or sign in with</div>
                </div>
                <button className={styles.oAuthBtn}>
                <img className={styles.oAuthIcon} src="https://image.flaticon.com/teams/slug/google.jpg"/>
                Google Account</button>
                <button className={styles.oAuthBtn}>
                    <img 
                    className={styles.oAuthIcon} 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7W9tq9cTBmmGW9jiOzG4Tmw-0Am0MxtjLHy-pdJKuQ9ol1d0"
                    alt="facebook"
                    />
                    Facebook Account
                </button>
            </div>
        );
    }
}

export default Auth;;