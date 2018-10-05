import React, { Component } from 'react';
import styles from './Create.css';
import Dropzone from 'react-dropzone';
import ReactQuill from 'react-quill';
import {FaCaretDown, FaCaretRight, FaMapMarker} from 'react-icons/fa'
import { IconContext } from 'react-icons';
class create extends Component {


    state = {
        dropdownOpen: false,
        gameValue: 'Choose your game',
        character: '',
        rank: '',
        pricing: '',
        charArr : []

    }

    toggleDropdown = () => {
        this.setState(prevState => {
            return {
                dropdownOpen: !prevState.dropdownOpen
            }
        })
    }

    setGameValue = (val) => {
        this.setState({
            gameValue: val
        })
    }

    charChangeHandler = (e) => {
        let word = e.target.value;

        if(word[word.length -1] == ','){
            let myString = word.split(",").join("")
            
            this.setState(prevState => {
                let arr = [...prevState.charArr];
                arr.push(myString);
                return {
                    character: '',
                    charArr: arr
                }
            })
        }else{
            this.setState({
                character: word
            })
        }
    }

    render(){
        let editor = null;
        let dropdownList = null;
        let chars = null;
        if(this.state.charArr.length > 0){
            chars = this.state.charArr.map(el => {
                return (
                    <span className={styles.charSpan}>{el}</span>
                )
            })
        }

        if(this.state.dropdownOpen){
            dropdownList = (
                <div className={styles.dropdownHover}>
                    <ul className={styles.dropdownList}>
                        <li className={styles.dropdownItem} onClick={() => this.setGameValue('Super Smash Bros Melee')}>Super Smash Bros Melee</li>
                        <li className={styles.dropdownItem} onClick={() => this.setGameValue('Super Smash Bros 4')}>Super Smash Bros 4</li>
                        <li className={styles.dropdownItem} onClick={() => this.setGameValue('Overwatch')}>Overwatch</li>
                    </ul>
            </div>
            )
        }
        if(this.props.step == 1){
            editor = (

                <div className={styles.container}>
                <div className={styles.title2}>General</div>

                <div className={styles.box}>
                    <div className={styles.flex}>
                        <div className={styles.span}>GIG Title</div>
                        <textarea className={styles.textarea} placeholder="Professional doubles fox tech coaching" />
                    </div>
                    <div className={styles.flex}>
                    <span className={styles.span}>Game</span>
                    <div className={styles.dropdown} onClick={this.toggleDropdown}>
                        {this.state.gameValue}
                        <span className={styles.caret}>
                            <IconContext.Provider value={{color: '#777', size: '14px'}}>
                            <FaCaretDown/>
                            </IconContext.Provider>
                        </span>
                        {dropdownList}
                    </div>
                </div>
                <div className={styles.flex}>
                    <span className={styles.span}>Rank</span>
                    <input  className={styles.input} value={this.state.rank} placeholder="Grandmaster" onChange={(e) => this.setState({rank: e.target.value})}/>
                </div>

                <div className={styles.flex}>
                    <span className={styles.span}>Pricing</span>
                    <input  className={styles.input} value={this.state.pricing} placeholder="$5/hr" onChange={(e) => this.setState({pricing: e.target.value})}/>
                </div>

                <div className={styles.flex}>
                    <div>
                        <span className={styles.span}>Characters</span>
                        <span className={styles.hint}>Enter comma to separate characters.</span>
                    </div>
                    <div className={styles.charEditor}>
                    {chars}
                    <input  className={styles.charInput} value={this.state.character} onChange={this.charChangeHandler}/>
                    </div>

                </div>
                </div>
                <button className={styles.btn} onClick={this.props.nextStep}>Save & Continue</button>
                </div>
            )
        }else{
            editor = (
                <div className={styles.container}>
                    <div className={styles.title2}>Description</div>
                    <p className={styles.desc}>Briefly describe your coaching gig</p>
                    <ReactQuill theme="snow" className={styles.quill}/>
                    <div className={styles.editorFooter}>
                        <span>min. 50</span>
                        <span>11/1200 Characters</span>
                    </div>
                    <button className={styles.btn}>Save & Continue</button>
                </div>
            )
        }
        return (
            <div className={styles.wrapper}>
                <div className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <span className={styles.navCurrent}>
                            <IconContext.Provider value={{color: '#fff', size: '14px'}}>
                            <FaMapMarker/>
                            </IconContext.Provider>
                            </span>
                            <span>Overview</span>
                            <span className={styles.navCaret}>
                                <IconContext.Provider value={{color: '#777', size: '14px'}}>
                                <FaCaretRight/>
                                </IconContext.Provider>
                            </span>
                        </li>
                        <li className={styles.navItem}>
                            <span className={styles.navNum}>2</span>
                            <span>Description</span>
                            <span className={styles.navCaret}>
                                <IconContext.Provider value={{color: '#777', size: '14px'}}>
                                <FaCaretRight/>
                                </IconContext.Provider>
                        </span>
                        </li>                    
                        <li className={styles.navItem}>
                            <span className={styles.navNum}>3</span>
                            <span>Publish</span>
                        </li>                            
                        
                    </ul>
                </div>
                {editor}
            </div>
        )
    }

}


                    // <Dropzone className={styles.dropzone}>
                    //     <img src="https://www.materialui.co/materialIcons/file/cloud_upload_grey_192x192.png" className={styles.uploadImg}/> 
                    // </Dropzone>
export default create;