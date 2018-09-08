import React from 'react';
import styles from './Reviews.css';
import Stars from '../Stars/Stars';
const pic = require('../../../assets/selfie.JPG');

const reviews = props => {
    let userReviews = [];
    for(let i=0; i < 3; i++){
        userReviews.push(
            <div className={styles.userReview}>
            <img src={pic} className={styles.reviewPic} alt="profile pic"/>
            <div className={styles.reviewContent}>
                <h4>CamHeichou</h4>
                <div className={styles.starContainer}>
                    <span className={styles.score}>5.0</span>
                    <Stars/>
                </div> 
                <p className={styles.reviewP}>Yami Tamashi is probably the equivalent of a bronze Hanzo player. He had difficulty teaching offledge wave shines. His Sheik is alright though.</p>
                <span className={styles.reviewDate}>2 weeks ago</span>
            </div>
    </div>
        )
    }
    return (
        <div className={styles.profileReviews}>
            <div className={styles.reviewHeader}>
            <h2 className={styles.profileName}>Yamis Reviews</h2>
            </div>
            <div>
                {userReviews}
            </div>                                      
    </div>
    )
}

export default reviews;