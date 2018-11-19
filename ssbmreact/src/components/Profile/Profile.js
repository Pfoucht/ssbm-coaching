import React, {Component} from 'react';
import styles from './Profile.css';
import Reviews from './Reviews/Reviews';
import {FiClock, FiMapPin, FiTarget, FiUser} from 'react-icons/fi';
import { IoIosClock } from 'react-icons/io';
import { IconContext } from 'react-icons';
import Browse from '../Browse/Browse';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import ProfileLeft from './ProfileLeft/ProfileLeft';
import Card from '../Browse/Card/Card';

const pic = require('../../assets/selfie.JPG');

class Profile extends Component {

    state = {
        view: 'profile',
        bioEdited: false,
        bioText: ''
    }

    componentDidMount(){
        this.setState({
            bioText: this.props.profileBio || 'I am a profession Fortnite player, and can help you start winning your matches. I am in a pacific time zone and can coach up to 10 hours a week. Feel free to send me a message!'
        })
    }

    onDrop = (acceptedFiles, rejectedFiles) => {
        console.log(acceptedFiles[0]);
        let img = acceptedFiles[0];
        this.setState({uploadedImg: img});
        const formData = new FormData();
        formData.append("file", img);
        formData.append('tags', 'coaching, user');
        formData.append('upload_preset', 'bgwxdlxr');
        formData.append('api_key', '925115465218681');
        formData.append('timestamp', (Date.now() / 1000 | 0));
    
        axios.post('https://api.cloudinary.com/v1_1/ssbm-coaching/image/upload', formData, {
            headers: { "X-Requested-With": "XMLHttpRequest"}
        }).then(res => {
            const data = res.data;
            const fileURL = data.secure_url;
            console.log(data);
            console.log(fileURL);
            
            this.props.changeProfilePicture(fileURL);
        })
    }

    toggleBioMode = () => {
        this.setState(prevState => {
            return {
                bioEdited: !prevState.bioEdited
            }
        })
    }

    render() {
        let navClasses = [styles.aLine];
        if (this.state.view === 'reviews') {
            navClasses.push(styles.spanReview)
        } else if (this.state.view === 'gigs') {
            navClasses.push(styles.spanGigs)
        }

        let content = (
            <div className={styles.flexbox}>
                <ProfileLeft/>
                <div className={styles.flexTwoThird}>
                    <div className={styles.box}>
                        <div className={styles.boxTitle}>
                            <span>About</span>
                            
                            {this.props.isOwnProfile ? 
                                <span onClick={this.toggleBioMode} className={styles.editLink}>Edit Bio</span>
                                :
                                null}
                        </div>
                        {!this.state.bioEdited 
                        ?
                        <div className={styles.content}>
                            <p className={styles.p}>{this.state.bioText}</p>
                        </div>
                        :
                        <div>
                        <textarea className={styles.bioTextarea} value={this.state.bioText} onChange={(e) => this.setState({bioText: e.target.value})}/>
                        <button onClick={this.toggleBioMode} className={styles.cancelBtn}>Cancel</button>
                        <button className={styles.submitBtn}>Submit</button>
                        </div>
                        }
                    </div>

                </div>
            </div>
        );

        if (this.state.view === 'gigs') {
            let items = this.props.gigs.map((el) => {
                return <Card el={el}/>
            })
            content = (
                <div className={styles.cardFlexbox}>
                    {items}
                    <div className={styles.createGig}>
                        <div>+</div>
                        <div>Create New Gig</div>
                    </div>
                </div>
            )
        } else if (this.state.view === 'reviews') {
            content = (<Reviews/>)
        }

        return (
            <div className={styles.wrapper}>
                <div className={styles.profileContainer}>
                    <header className={styles.header}>
                        <div className={styles.profilePicContainer}>
                            <img src={this.props.profilePicture || 'https://education.fsu.edu/wp-content/uploads/2018/07/placeholder.png'} className={styles.profilePic}/>
                            <div className={styles.profilePicHover}>
                                <Dropzone className={styles.dropzone}  onDrop={this.onDrop}>
                                    <img className={styles.cameraIcon} src="data:image/png;base64,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" alt="Change profile picture"/>
                                </Dropzone>
                            </div>
                        </div>

                        <div className={styles.info}>
                            <h2 className={styles.profileName}>{this.props.username}</h2>
                            <p className={styles.p}>Super Smash Bros Melee</p>
                            <p className={styles.p}>20xx Fox coach</p>
                            {this.props.isOwnProfile ? 
                                <div>
                                    <button className={styles.previewBtn}>Preview Public Mode</button>
                                </div>
                                :
                                <div>
                                    <button className={styles.profileBtn}>Contact Me</button>
                                    <button className={[styles.profileBtn, styles.profileBtnLight].join(' ')}>Get Details</button>
                                </div>
                            }

                        </div>
                        <div className={styles.headerRight}>
                            <div>
                                <ul className={styles.list}>
                                    <li className={styles.item}>
                                        <div className={styles.itemLeft}>
                                            <span className={styles.itemIcon}>
                                                <IconContext.Provider value={{color: '#222', size: '1.25rem'}}>
                                                <div>
                                                    <FiClock/>
                                                </div>
                                                </IconContext.Provider> 
                                            </span>
                                            Availability:
                                        </div>
                                        <strong>Full Time</strong>
                                    </li>
                                    <li className={styles.item}>
                                        <div className={styles.itemLeft}>
                                        <span className={styles.itemIcon}>
                                        <IconContext.Provider value={{color: '#222', size: '1.25rem'}}>
                                        <div>
                                            <FiMapPin/>
                                        </div>
                                        </IconContext.Provider> 
                                    </span>
                                            Location:
                                        </div>
                                        <strong>Bellevue Wa</strong>
                                    </li>
                                    <li className={styles.item}>
                                        <div className={styles.itemLeft}>
                                            <span className={styles.itemIcon}>
                                            <IconContext.Provider value={{color: '#222', size: '1.25rem'}}>
                                            <div>
                                                <FiTarget/>
                                            </div>
                                            </IconContext.Provider> 
                                        </span>
                                            Smash Rank:
                                        </div>
                                        <strong>Grandmaster</strong>
                                    </li>

                                    <li className={styles.item}>
                                        <div className={styles.itemLeft}>
                                            <span className={styles.itemIcon}>
                                            <IconContext.Provider value={{color: '#222', size: '1.25rem'}}>
                                            <div>
                                                <FiUser/>
                                            </div>
                                            </IconContext.Provider> 
                                        </span>
                                            Main Character:
                                        </div>
                                        <strong>Marth</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>

                    <div className={styles.splitter}>
                        <span
                            className={[
                            styles.splitterSpan, this.state.view === 'profile'
                                ? styles.spanActive
                                : null
                        ].join(' ')}
                            onClick={() => this.setState({view: 'profile'})}>
                            Info
                        </span>
                        <span
                            className={[
                            styles.splitterSpan, this.state.view === 'reviews'
                                ? styles.spanActive
                                : null
                        ].join(' ')}
                            onClick={() => this.setState({view: 'reviews'})}>
                            Reviews
                        </span>
                        <span
                            className={[
                            styles.splitterSpan, this.state.view === 'gigs'
                                ? styles.spanActive
                                : null
                        ].join(' ')}
                            onClick={() => this.setState({view: 'gigs'})}>
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
