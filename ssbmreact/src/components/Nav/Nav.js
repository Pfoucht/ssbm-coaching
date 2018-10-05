import React, { Component } from 'react';

import styles from './Nav.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Auth from '../Auth/Auth';
import {FaSearch} from 'react-icons/fa';
import {IoMdSearch} from 'react-icons/io';
import { IconContext } from 'react-icons';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
    state = {
        isAuthenticated : true,
        search: ''
    }
    constructor(props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        console.log("clicked");
        this.props.navClick();
    }

    searchHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/browse/');
        this.setState({
            search: ''
        });
    }

    render() {
        return (
            <div className={styles.mainNav}>
                <div className={styles.left}>
                <h1 className={styles.brand}><Link className={styles.link} to="/">coach.gg</Link></h1>
                <form className={styles.form} onSubmit={this.searchHandler}>
                <div className={styles.searchIcon}>
                <IconContext.Provider value={{color: '#807575', size: '18px'}}>
                <div>
                    <IoMdSearch/>
                </div>
             </IconContext.Provider>
                </div>
                <input className={styles.input} placeholder="Search games or coaches" value={this.state.search} onChange={(e) => this.setState({search: e.target.value})} />
                <button className={styles.btn} type="submit">Search</button>
                </form>
                </div>
                <Navigation onClick={this.onClick} isAuthenticated={true}/>
            </div>
        )
    }
}

export default withRouter(Nav);