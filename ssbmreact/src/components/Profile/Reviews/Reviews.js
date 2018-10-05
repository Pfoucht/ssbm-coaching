import React from 'react';
import styles from './Reviews.css';
import Stars from '../Stars/Stars';
const pic = require('../../../assets/dakota.jpg');

const reviews = props => {
    let userReviews = [];
    for(let i=0; i < 3; i++){
        userReviews.push(
            <div className={styles.userReview}>
            <img src="https://s3.amazonaws.com/abn-prod/wp-content/uploads/sites/3/2018/09/Greenberger_.png" className={styles.reviewPic} alt="profile pic"/>
            <div className={styles.reviewContent}>
                <h4 className={styles.reviewName}>CamHeichou</h4>
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
            <div className={styles.flexbox}>
            <h2 className={styles.profileName}>Yamis Reviews</h2>
            <Stars/>
            <span className={styles.total}>5</span>
            <span className={styles.total}>( 328 reviews )</span>
            
            </div>
            <div>
                <select name="sort">
                    <option>Most Recent</option>
                    <option>Highest Rated</option>
                    <option>Lowest Rated</option>
                </select>
            </div>
            </div>
            <div>
                {userReviews}
            </div>                                      
    </div>
    )
}

export default reviews;