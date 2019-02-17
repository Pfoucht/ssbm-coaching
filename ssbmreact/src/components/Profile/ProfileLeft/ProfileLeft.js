import React, { Component } from 'react'
import styles from './ProfileLeft.css';
import { FaUser, FaLocationArrow} from 'react-icons/fa';
import { IconContext } from 'react-icons';


class ProfileLeft extends Component{

    constructor(props){
        super(props);
        console.log('constructor');

        console.log(props);
        this.state = {
            bioText: props.bioText,
            bioEditMode: false
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.bioText !== prevProps.bioText){
            this.setState({
                bioText: this.props.bioText
            });
        }
    }

render(){
  return (
    <div className={styles.flexOneThird}>
    <div className={styles.box}>
        <img src={this.props.profilePic} className={styles.profilePic}/>
        <h2 className={styles.profileName}>CamdenFoucht</h2>
        {
            this.props.editMode 
            ?
            <div className={styles.btnContainer}>
                <button className={styles.editBtn} onClick={this.props.onEditMode}>Preview Public Mode</button>
            </div>
            :
            <div className={styles.btnContainer}>
                <button className={styles.contactBtn}>Contact Me</button>
                <button className={styles.editBtn} onClick={this.props.onEditMode}>Edit Profile</button>
            </div>
        }
        <hr className={styles.hr}/>
        <ul>
            <li className={styles.listItem}>
            <div>
                <IconContext.Provider value={{color: '#444', size: '.75rem'}}>
                <span>
                    <FaLocationArrow/>
                </span>
            </IconContext.Provider>
            <span className={styles.itemSpan}>From</span>
            </div>
            <div>
                <strong>United States</strong>
            </div>
            </li>
            <li className={styles.listItem}>
            <div>
                <IconContext.Provider value={{color: '#444', size: '.75rem'}}>
                <span>
                    <FaUser/>
                </span>
            </IconContext.Provider>
            <span className={styles.itemSpan}>Member Since</span>
            </div>
            <div>
                <strong>2019</strong>
            </div>
            </li>
        </ul>
    </div>
    <div className={styles.box}>
    <div className={styles.boxTitle}>
        <span>About</span>
        {this.props.editMode ? <span className={styles.editLink}>Edit</span> : null}
    </div>
    {!this.props.editMode 
    ?
    <div className={styles.content}>
        <p className={styles.p}>{this.props.bioText}</p>
    </div>
    :
    <div className={styles.editBox}>

    <textarea value={this.state.bioText} className={styles.bioTextarea} onChange={(e) => this.setState({bioText: e.target.value})}/>
    <div className={styles.btnContainer}>
    <button onClick={this.toggleBioMode} className={styles.cancelBtn}>Cancel</button>
    <button className={styles.submitBtn}>Submit</button>
    </div>
    </div>
    }
</div>
    <div className={styles.box}>
        <div className={styles.boxTitle}>Connect</div>
        <div className={styles.content}>
            <ul>
                <li className={styles.item2}>
                    <img
                        src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/1226/facebook-icon-preview-1.png"
                        className={styles.listIcon}/>
                    Facebook
                </li>
                <li className={styles.item2}>
                    <img
                        src="https://www.bernardmarr.com/img/case-study/logos/twitter.png"
                        className={styles.listIcon}/>
                    Twitter
                </li>
                <li className={styles.item2}>
                    <img
                        src="https://vignette.wikia.nocookie.net/fallout/images/4/43/Twitch_icon.png/revision/latest?cb=20180507131302"
                        className={styles.listIcon}/>
                    Twitch
                </li>
                <li className={styles.item2}>
                    <img
                        src="https://lh3.googleusercontent.com/Ned_Tu_ge6GgJZ_lIO_5mieIEmjDpq9kfgD05wapmvzcInvT4qQMxhxq_hEazf8ZsqA"
                        className={styles.listIcon}/>
                    Youtube
                </li>
            </ul>
        </div>
    </div>

</div>
  )
}
}

export default ProfileLeft;
