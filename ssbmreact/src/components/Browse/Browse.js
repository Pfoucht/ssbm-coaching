import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Browse.css';
import {FaHeart} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import Card from './Card/Card';
import BrowseNavigation from './Navigation/Navigation';

class Browse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cards = null;
        if(this.props.posts && this.props.posts.length > 0){
            cards = this.props.posts.map(el => {
                return <Card el={el} />
            })
        }
        return (
            <div>
                <section className={styles.browseContainer}> 
                    <BrowseNavigation/>
                    <div className={styles.container}>

                        <div className={styles.flex}>
                            {cards}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

// <h4 className={styles.flexHeader}>
// Melee Coaches
// </h4>

export default Browse;