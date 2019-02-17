import React from 'react'
import styles from './SingleReview.css';
import Stars from '../../Stars/Stars';

export default (props) => {
    
console.log(props);

  return (
    <div className={styles.userReview}>
    <img src={props.el.author ? props.el.author.profilePicture : "https://s3.amazonaws.com/abn-prod/wp-content/uploads/sites/3/2018/09/Greenberger_.png"} className={styles.reviewPic} alt="profile pic"/>
    <div className={styles.reviewContent}>
        <div className={styles.flexBetween}>
        <h4 className={styles.reviewName}>{props.el.author.username}</h4>
        <span className={styles.reviewDate}>{props.el.date}</span>
        </div>
        <div className={styles.starContainer}>
            <span className={styles.score}>{props.el.rating}</span>
            <Stars/>
        </div> 
        <p className={styles.reviewP}>{props.el.content}</p>
    </div>
</div>
  )
}
