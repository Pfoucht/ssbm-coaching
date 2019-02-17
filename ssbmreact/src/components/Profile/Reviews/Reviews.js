import React from 'react';
import styles from './Reviews.css';
import Stars from '../Stars/Stars';
import {FaCaretDown} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import SingleReview from './SingleReview/SingleReview';
const pic = require('../../../assets/dakota.jpg');

const reviews = props => {
    let userReviews = [];
    for(let i=0; i < props.reviews.length; i++){
        userReviews.push(
            <SingleReview el={props.reviews[i]}/>
        )
    }
    return (
        <div className={styles.profileReviews}>
            <div className={styles.reviewHeader}>
            <div className={styles.flexbox}>
            <h2 className={styles.profileName}>Yamis Reviews</h2>
            <Stars/>
            <span className={styles.total}>5</span>
            <span className={styles.total}>( 328 reviews )</span>
            
            </div>
            <div>
                <div className={styles.selectContainer}>
                <select className={styles.select} name="sort">
                    <option>Most Recent</option>
                    <option>Highest Rated</option>
                    <option>Lowest Rated</option>
                </select>
                <span className={styles.caret}>
                <IconContext.Provider value={{color: '#777', size: '14px'}}>
                <FaCaretDown/>
                </IconContext.Provider>
                </span>
                </div>
            </div>
            </div>
            <div>
                {userReviews}
            </div>                                      
    </div>
    )
}

export default reviews;