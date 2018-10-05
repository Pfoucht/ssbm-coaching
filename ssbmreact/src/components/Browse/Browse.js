import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Browse.css';
import {FaHeart} from 'react-icons/fa'
import { IconContext } from 'react-icons';

class Browse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <header className={styles.header}>
                <h1 className={styles.h1}>Melee Coaches</h1>
            </header>
            <section className={styles.browseContainer}> 
                <div className={styles.container}>
                <h4 className={styles.flexHeader}>
                    Melee Coaches
                </h4>
                <div className={styles.flex}>
                    <Link className={styles.card} to="/detail">
                        <img src="http://a.espncdn.com/combiner/i?img=/photo/2016/0121/r46911_800x450_16-9.jpg&w=800" className={styles.cardImg} />
                        <div className={styles.cardContent}>
                            <span className={styles.name}>Leffen</span>
                            <span className={styles.game}>Super Smash Bros Melee</span>
                            <span className={styles.chars}>Characters: Fox,Falco,Marth</span>

                            </div>
                    </Link>
                    <div className={styles.card}>
                        <img src="https://smashgg.imgix.net/images/tournament/93220/image-8b447844c7dfe5292ac62c8151743ba9.png?auto=compress,format&w=300" className={styles.cardImg} />
                        <div className={styles.cardContent}>
                            Card Body
                        </div>
                    </div>
                    <div className={styles.card}>
                    <img src="http://a.espncdn.com/combiner/i?img=/photo/2016/0121/r46911_800x450_16-9.jpg&w=800" className={styles.cardImg} />
                    <div className={styles.cardContent}>
                        <span className={styles.name}>Leffen</span>
                        <span className={styles.game}>Game: Super Smash Bros Melee</span>
                        <span className={styles.chars}>Characters: Fox,Falco,Marth</span>

                        </div>
                </div>
                <div className={styles.card}>
                <img src="http://a.espncdn.com/combiner/i?img=/photo/2016/0121/r46911_800x450_16-9.jpg&w=800" className={styles.cardImg} />
                <div className={styles.cardContent}>
                    <span className={styles.name}>Leffen</span>
                    <span className={styles.game}>Game: Super Smash Bros Melee</span>
                    <span className={styles.chars}>Characters: Fox,Falco,Marth</span>

                    </div>
                    <div className={styles.cardFooter}>
                        <span>
                            <IconContext.Provider value={{color: '#777', size: '.75rem'}}>
                                <FaHeart/>
                            </IconContext.Provider>
                        </span>
                        <span className={styles.free}>FREE</span>
                    </div>
            </div>


                </div>
                </div>
            </section>
            </div>
        )
    }
}

export default Browse;