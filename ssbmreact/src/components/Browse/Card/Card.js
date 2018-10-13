import React from 'react';
import styles from './Card.css';
import { Link } from 'react-router-dom';

const card = (props) => (
    <Link className={styles.card} to={"/detail/" + props.el._id}>
        <img src={props.el.coverPhoto || "http://a.espncdn.com/combiner/i?img=/photo/2016/0121/r46911_800x450_16-9.jpg&w=800"} className={styles.cardImg} />
        <div className={styles.cardContent}>
            <h5 className={styles.title}>{props.el.title}</h5>
            <span className={styles.game}>{props.el.game}</span>
            <span className={styles.chars}>Characters: {props.el.characters.join(', ')}</span>
         </div>
    </Link>
);

export default card;