import React from 'react';
import styles from './GigDetail.css';
import Reviews from '../Profile/Reviews/Reviews';
import { FaBackward } from 'react-icons/fa';
import { IconContext } from 'react-icons';
const pic = require('../../assets/dakota.jpg');


const GigDetail = props => {

    let description = null;
    let pricing = null;
    let rank = null;

    if(props.post){
        description = props.post.description;
        pricing = props.post.pricing;
        rank = props.post.rank;
    }
    return (
        <section className={styles.gigContainer}>
            <div className={styles.container}>
            <span className={styles.back} onClick={props.goBack}>
            <span className={styles.backIcon}>
            <IconContext.Provider value={{color: '#550fff', size: '.75rem'}}>
            <FaBackward/>
            </IconContext.Provider>
            </span>
            Back to search results</span>

                <div className={styles.flex}>
                <div className={styles.gigLeft}>
                <div className={styles.box}>
                <div className={styles.boxTitle}>About this Gig</div>
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{__html: description}}>
                    </div>
                    <div className={styles.footer}>
                    <div className={styles.footerItem}>
                        <span className={styles.fTop}>$10.00</span>
                        <span className={styles.fBottom}>Hourly Rate</span>
                    </div>
                    <div className={styles.footerItem}>
                        <span className={styles.fTop}>{rank}</span>
                        <span className={styles.fBottom}>Rank</span>
                    </div>
                    <div className={styles.footerItem}>
                    <span className={styles.fTop}>Washington</span>
                    <span className={styles.fBottom}>Location</span>
                </div>                                    
                    <div className={styles.footerItem}>
                        <span className={styles.fTop}>8</span>
                        <span className={styles.fBottom}>Reviews</span>
                    </div>                                             
                </div>
                </div>
            </div>
                <div className className={styles.box}>
                <div className={styles.boxTitle}>About the Coach</div>

                    <div className={styles.top}>
                        <img src={pic} className={styles.profilePic}/>
                        <div>
                            <span>Camden Foucht</span>
                        </div>
                    </div>
                    <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>

                <Reviews/>
                </div>
                <div className={styles.gigRight}>
                <h4 className={styles.h4}>To discuss your coaching with Yami, message him.</h4>
                <input className={styles.input} placeholder="Name"/>
                <input className={styles.input} placeholder="Email"/>
                <textarea className={styles.textarea} placeholder="Message"/>
                <button className={styles.btn}>Contact</button>
                </div>
            </div>

            </div>
        </section>
    )
}

export default GigDetail;