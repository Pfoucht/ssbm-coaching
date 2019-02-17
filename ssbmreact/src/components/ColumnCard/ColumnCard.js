import React from 'react';
import styles from './ColumnCard.css';
import { FaStar} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const columnCard = (props) => {

    return (
        <div className={styles.card}>
        <div className={styles.imgHolder}>
        <img className={styles.cardImg} src="https://udemy-images.udemy.com/course/240x135/2009974_6de3.jpg"/>
        </div>
        <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{props.el.title}</h2>
            <div className={styles.contentFlex}>
                <img className={styles.cardProfileImg} src="https://res.cloudinary.com/ssbm-coaching/image/upload/v1543464884/ME_funp4e.png"/>
                <span className={styles.author}>CamHeichou</span>
            </div>
            <span className={styles.game}>{props.el.game}</span>

        </div>
        <div className={styles.cardPricing}>
            <h3>$10.99/hr</h3>
            <div className={styles.starContainer}>
                <IconContext.Provider value={{color: '#f4c150', size: '.85rem'}}>
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <span className={styles.starNumber}>5.0</span>
                </div>
                <div className={styles.totalRatings}>
                (100 Ratings)
                </div>
                </IconContext.Provider>
            </div>
        </div>
    </div>
    );
};

export default columnCard;