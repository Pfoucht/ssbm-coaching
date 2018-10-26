import React from 'react';
import styles from './Card.css';
import { Link } from 'react-router-dom';

const card = (props) => (
    <Link className={styles.card} to={"/detail/" + props.el._id}>
        <img src={props.el.coverPhoto || "http://a.espncdn.com/combiner/i?img=/photo/2016/0121/r46911_800x450_16-9.jpg&w=800"} className={styles.cardImg} />
        <div className={styles.cardContent}>
            <h5 className={styles.title}>{props.el.title}</h5>
            <span className={styles.game}>{props.el.game}</span>
            <div className={styles.cardFooter}>
            <div>
            <span className={styles.spanBig}>6</span>
            <span className={styles.spanSmall}>Chars</span>
        </div>      
                <div>
                    <span className={styles.spanBig}>10</span>
                    <span className={styles.spanSmall}>Reviews</span>
                </div>

                <div>
                    <span className={styles.spanBig}>10$</span>
                    <span className={styles.spanSmall}>COST/HOUR</span>
                </div>                          
            </div>
         </div>
    </Link>
);


// <span className={styles.chars}>Characters: {props.el.characters.join(', ')}</span>

export default card;