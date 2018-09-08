import React, { Component } from 'react';
import styles from './Profile.css';
import Reviews from './Reviews/Reviews';
import {FiClock} from 'react-icons/fi';
const pic = require('../../assets/selfie.JPG');


class Profile extends Component {

    state = {
        view: 'profile'
    }

    render(){
        let navClasses = [styles.aLine];
        if(this.state.view === 'reviews'){
            navClasses.push(styles.spanReview)
        }else if(this.state.view === 'gigs'){
            navClasses.push(styles.spanGigs)
        }

        let content = (
            <div className={styles.flexbox}>
            <div className={styles.flexOneThird}>
            <div className={styles.box}>
                <h3 className={styles.headingSmall}>Connect</h3>
                <li className={styles.item2}>
                    <img src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/1226/facebook-icon-preview-1.png" className={styles.listIcon}/>
                    Facebook
                </li>
                <li className={styles.item2}>
                    <img src="https://www.bernardmarr.com/img/case-study/logos/twitter.png" className={styles.listIcon}/>
                    Twitter
                </li>
                <li className={styles.item2}>
                    <img src="https://vignette.wikia.nocookie.net/fallout/images/4/43/Twitch_icon.png/revision/latest?cb=20180507131302" className={styles.listIcon}/>
                    Twitch
                </li>
                <li className={styles.item2}>
                    <img src="https://lh3.googleusercontent.com/Ned_Tu_ge6GgJZ_lIO_5mieIEmjDpq9kfgD05wapmvzcInvT4qQMxhxq_hEazf8ZsqA" className={styles.listIcon}/>
                    Youtube
                </li>                
            </div>
            <div className={styles.box}>
                <h3 className={styles.headingSmall}>Connect</h3>
                <li className={styles.item2}>
                    <img src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/1226/facebook-icon-preview-1.png" className={styles.listIcon}/>
                    Facebook
                </li>
                <li className={styles.item2}>
                    <img src="https://www.bernardmarr.com/img/case-study/logos/twitter.png" className={styles.listIcon}/>
                    Twitter
                </li>
                <li className={styles.item2}>
                    <img src="https://vignette.wikia.nocookie.net/fallout/images/4/43/Twitch_icon.png/revision/latest?cb=20180507131302" className={styles.listIcon}/>
                    Twitch
                </li>
                <li className={styles.item2}>
                    <img src="https://lh3.googleusercontent.com/Ned_Tu_ge6GgJZ_lIO_5mieIEmjDpq9kfgD05wapmvzcInvT4qQMxhxq_hEazf8ZsqA" className={styles.listIcon}/>
                    Youtube
                </li>                
            </div>
            </div>
            <div className={styles.flexTwoThird}>
                <Reviews/>
            
            </div>
            </div>  
        );

        if(this.state.view === 'gigs'){
            content = (
                <div className={styles.flexbox}>
                    <div className={styles.card}>One on One Coaching</div>
                    <div className={styles.card}>Doubles Coaching</div>
                    <div className={styles.card}>Fox Tech Skill Training</div>
                    <div className={styles.card}>Moonwalking</div>
                </div>
            )
        }else if(this.state.view === 'reviews'){
            content = (
                <Reviews/>
            )
        }

        

        return (
            <div className={styles.wrapper}>
            <div className={styles.profileContainer}>
            <header className={styles.header}>
                    <div>
                        <img src={pic} className={styles.profilePic} />
                    </div>
    
                    <div className={styles.info}>
                        <h2 className={styles.profileName}>Yami Tamashi</h2>
                        <p className={styles.p}>Super Smash Bros Melee</p>
                        <p className={styles.p}>20xx Fox coach</p>
                        <div>
                            <button className={styles.profileBtn}>Contact Me</button>
                            <button className={[styles.profileBtn, styles.profileBtnLight].join(' ')}>Get Details</button>
                        </div>
                    </div>
                    <div className={styles.headerRight}>
                        <div>
                            <ul className={styles.list}>
                            <li className={styles.item}>
                            <div className={styles.itemLeft}>
                            <img src="https://vignette.wikia.nocookie.net/mario/images/b/b8/Bob-omb_Buddy%2C_Super_Mario_Galaxy_2.png/revision/latest?cb=20121106193912" className={styles.listIcon}/>
                            Availability: 
                            </div>
                            <strong>Full Time</strong></li>
                            <li className={styles.item}>
                            <div className={styles.itemLeft}>
                            <img src="https://vignette.wikia.nocookie.net/diepio/images/8/8e/Shine_melee.png/revision/latest?cb=20160727205952" className={styles.listIcon}/>
                            Location: 
                            </div>
                            <strong>Bellevue Wa</strong></li>
                            <li className={styles.item}>
                            <div className={styles.itemLeft}>
                            <img src="https://www.smashladder.com/images/smash/tiers/grandsmasher.png" className={styles.listIcon}/>
                            Smash Rank: 
                            </div>
                            <strong>Grandmaster</strong></li>

                            <li className={styles.item}>
                            <div className={styles.itemLeft}>
                            <img src="https://www.models-resource.com/resources/big_icons/6/5380.png" className={styles.listIcon}/>
                            Main Character: 
                            </div>
                            <strong>Marth</strong></li>
                            </ul>
                        </div>
                    </div>
            </header> 

                <div className={styles.splitter}>
                    <span className={[styles.splitterSpan, this.state.view === 'profile' ? styles.spanActive : null].join(' ')} onClick={() => this.setState({view: 'profile'})}>
                        Info
                    </span>
                    <span className={[styles.splitterSpan, this.state.view === 'reviews' ? styles.spanActive : null].join(' ')} onClick={() => this.setState({view: 'reviews'})} >
                        Reviews
                    </span>
                    <span className={[styles.splitterSpan, this.state.view === 'gigs' ? styles.spanActive : null].join(' ')} onClick={() => this.setState({view: 'gigs'})} >
                    Gigs
                </span>
                <div className={navClasses.join(' ')}></div>
                </div>
                {content}
            </div>
            </div>
        );
    }
}

export default Profile;
