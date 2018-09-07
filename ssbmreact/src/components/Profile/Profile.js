import React from 'react';
import styles from './Profile.css';
import Stars from './Stars/Stars';

const pic = require('../../assets/selfie.JPG');

const trophy1 = require('../../assets/FoxTrophyWiiU.png');
const trophy2 = require('../../assets/IceClimbersTrophyWiiU.png');
const trophy3 = require('../../assets/MarthTrophyWiiU.png');
const trophy4 = require('../../assets/SheikAltTrophyWiiU.png');

const profile = props => {
    return (
        <div className={styles.profileContainer}>
           <div className={styles.profileLeft}>
            <div className={styles.profileBox}>
                <img className={styles.profilePic} src={pic} />
                <h3 className={styles.profileName}>YamiTamashi</h3>
                <p>I can coach you to upper grandmaster level</p>
                <div>
                    <button className={styles.profileBtn}>Contact Me</button>
                    <button className={[styles.profileBtn, styles.profileBtnLight].join(' ')}>Get Details</button>
                </div>
                <hr/>
                <ul className={styles.profileList}>
                    <li className={styles.profileItem}><span>Location:</span> <strong>Bellevue, WA</strong></li>
                    <li className={styles.profileItem}><span>Smash Rank</span> <strong>Grandmaster</strong></li>
                    <li className={styles.profileItem}><span>Main Hero:</span> <strong>Captain Falcon</strong></li>
                    <li className={styles.profileItem}><span>Smashing since:</span> <strong>2014</strong></li>
                </ul>
            </div>
            <div className={styles.profileBox}>
                    <h3 className={styles.profileName}>Bio</h3>
                    <p className={styles.profileP}>loremlorem lorem. I am a generated response written by camden. Yami has been smahing since he was 3 yrs old. he can get you to level 99 in three days.</p>
                <hr/>
                    <h3 className={styles.profileName}>Bio</h3>
                    <p className={styles.profileP}>loremlorem lorem. I am a generated response written by camden. Yami has been smahing since he was 3 yrs old. he can get you to level 99 in three days.</p>
                </div>
           </div> 

           <div className={styles.profileRight}>
                <div className={styles.profileHeros}>
                    <div className={styles.heroHeader}>
                        <h2 className={styles.profileName}>Yamis Heros</h2>
                    </div>
                    <div className={styles.heroContainer}>
                        <img src={trophy1} className={styles.trophy}/>
                        <img src={trophy2} className={styles.trophy}/>
                        <img src={trophy3} className={styles.trophy}/>
                        <img src={trophy4} className={styles.trophy}/>
                        <img src={trophy1} className={styles.trophy}/>
                </div>
                </div>

                <div className={styles.profileReviews}>
                    <div className={styles.reviewHeader}>
                    <h3 className={styles.profileName}>Yamis Reviews</h3>
                    </div>
                    <div style={{border: '1px solid #ccc'}}>
                    <div className={styles.userReview}>
                            <img src={pic} className={styles.reviewPic}/>
                            <div className={styles.reviewContent}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                <h4 style={{marginRight: '8px'}}>CamHeichou</h4>
                                <div className={styles.starContainer} style={{paddingTop: 0}}>
                                    <Stars/>
                                </div> 
                                </div>
                                <p className={styles.reviewP}>Yami Tamashi is probably the equivalent of a bronze Hanzo player. He had difficulty teaching offledge wave shines. His Sheik is alright though.</p>
                                <span className={styles.reviewDate}>2 weeks ago</span>
                            </div>
                    </div>
                    <div className={styles.userReview}>
                            <img src={pic} className={styles.reviewPic}/>
                            <div className={styles.reviewContent}>
                                <h4>CamHeichou</h4>
                                <div className={styles.starContainer}>
                                    <Stars/>
                                </div> 
                                <p className={styles.reviewP}>Yami Tamashi is probably the equivalent of a bronze Hanzo player. He had difficulty teaching offledge wave shines. His Sheik is alright though.</p>
                                <span className={styles.reviewDate}>2 weeks ago</span>
                            </div>
                    </div>
                    <div className={styles.userReview}>
                            <img src={pic} className={styles.reviewPic}/>
                            <div className={styles.reviewContent}>
                                <h4>CamHeichou</h4>
                                <div className={styles.starContainer}>
                                    <Stars/>
                                </div> 
                                <p className={styles.reviewP}>Yami Tamashi is probably the equivalent of a bronze Hanzo player. He had difficulty teaching offledge wave shines. His Sheik is alright though.</p>
                                <span className={styles.reviewDate}>2 weeks ago</span>
                            </div>
                    </div>        
                    </div>                                      
                </div>
           </div>
        </div>
    );
}

export default profile;