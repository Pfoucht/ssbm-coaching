import React from 'react';
import styles from './Card.css';
import { Link } from 'react-router-dom';
import { FaStar} from 'react-icons/fa';
import { IconContext } from 'react-icons';



const card = (props) => (
    <Link className={styles.card} to={"/detail/" + props.el._id}>
        <img src={props.el.coverPhoto || "http://a.espncdn.com/combiner/i?img=/photo/2016/0121/r46911_800x450_16-9.jpg&w=800"} className={styles.cardImg} />
        <div className={styles.cardContent}>
            <div className={styles.profileContainer}>
            <img className={styles.profilePic} src={props.profilePicture || 'https://education.fsu.edu/wp-content/uploads/2018/07/placeholder.png'} />
            <span className={styles.profileName}>{props.profileName || 'b0aty'}</span>
            </div>
            <h5 className={styles.title}>{props.el.title}</h5>
            <span className={styles.game}>{props.el.game}</span>
            
            <div className={styles.cardFooter}>
                <span className={styles.spanLeft}>
                    <IconContext.Provider value={{color: '#550fff', size: '.85rem'}}>
                    <div>
                        <FaStar/>
                    </div>
                    </IconContext.Provider>
                    <span className={styles.span1}>5.0</span>
                    <span className={styles.span2}>(47)</span>
                </span>
                <span className={styles.pricing}>10$</span>
            </div>
         </div>
    </Link>
);


// <span className={styles.chars}>Characters: {props.el.characters.join(', ')}</span>

export default card;