import React, {Component} from 'react';
import styles from './StepOne.css';
import {FaCaretDown, FaCaretRight, FaMapMarker} from 'react-icons/fa'
import {IconContext} from 'react-icons';

class stepOne extends Component {

    state = {
        dropdownOpen: false,
        gameValue: 'Choose your game',
        character: '',
        rank: '',
        pricing: '',
        charArr: [],
        charInputActive: false,
        onBlur: false

    }

    nextStepHandler = () => {
        this.props.nextStep(
            this.state.gameValue,
            this.state.rank,
            this.state.pricing,
            this.state.charArr
        );
    }

    toggleDropdown = () => {
        this.setState(prevState => {
            return {
                dropdownOpen: !prevState.dropdownOpen
            }
        })
    }

    setGameValue = (val) => {
        this.setState({gameValue: val})
    }

    charChangeHandler = (e) => {
        let word = e.target.value;
        if (word[word.length - 1] == ',') {
            let myString = word
                .split(",")
                .join("");
            let testString = myString
                .split(' ')
                .join('');
            if (myString == ' ' || testString == '') {
                return;
            }
            this.setState(prevState => {
                let arr = [...prevState.charArr];
                arr.push(myString);
                return {character: '', charArr: arr}
            })
        } else {
            this.setState({character: word})
        }
    }

    charEditorHandler = () => {
        this.setState(prevState => {
            return {charInputActive: true}
        });
        document
            .getElementById("charInput")
            .focus();
    }

    onBlur = () => {
        this.setState(prevState => {
            let bool = !prevState.onBlur;
            if (!bool) {
                return {onBlur: bool, charInputActive: false}
            } else {
                return {onBlur: bool}
            }

        });
    }


    render() {
        let dropdownList = null;
        let chars = null;
        if (this.state.charArr.length > 0) {
            chars = this
                .state
                .charArr
                .map(el => {
                    return (
                        <span className={styles.charSpan}>{el}</span>
                    )
                })
        }
        if (this.state.dropdownOpen) {
            dropdownList = (
                <div className={styles.dropdownHover}>
                    <ul className={styles.dropdownList}>
                        <li
                            className={styles.dropdownItem}
                            onClick={() => this.setGameValue('Super Smash Bros Melee')}>Super Smash Bros Melee</li>
                        <li
                            className={styles.dropdownItem}
                            onClick={() => this.setGameValue('Super Smash Bros 4')}>Super Smash Bros 4</li>
                        <li
                            className={styles.dropdownItem}
                            onClick={() => this.setGameValue('Overwatch')}>Overwatch</li>
                    </ul>
                </div>
            )
        }
        return (
            <div className={styles.container}>
                <div className={styles.title2}>General</div>
                <div className={styles.box}>
                    <div className={styles.flex}>
                        <div className={styles.span}>GIG Title</div>
                        <textarea
                            className={styles.textarea}
                            placeholder="Professional doubles fox tech coaching"/>
                    </div>
                    <div className={styles.flex}>
                        <span className={styles.span}>Game</span>
                        <div className={styles.dropdown} onClick={this.toggleDropdown}>
                            {this.state.gameValue}
                            <span className={styles.caret}>
                                <IconContext.Provider
                                    value={{
                                    color: '#777',
                                    size: '14px'
                                }}>
                                    <FaCaretDown/>
                                </IconContext.Provider>
                            </span>
                            {dropdownList}
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <span className={styles.span}>Rank</span>
                        <input
                            className={styles.input}
                            value={this.state.rank}
                            placeholder="Grandmaster"
                            onChange={(e) => this.setState({rank: e.target.value})}/>
                    </div>

                    <div className={styles.flex}>
                        <span className={styles.span}>Pricing</span>
                        <input
                            className={styles.input}
                            value={this.state.pricing}
                            placeholder="$5/hr"
                            onChange={(e) => this.setState({pricing: e.target.value})}/>
                    </div>
                    <div className={styles.flex}>
                        <div>
                            <span className={styles.span}>Characters</span>
                            <span className={styles.hint}>Enter comma to separate characters.</span>
                        </div>
                        <div
                            className={[
                            styles.charEditor, this.state.charInputActive
                                ? styles.charEditorActive
                                : null
                        ].join(' ')}
                            onClick={this.charEditorHandler}>
                            {chars}
                            <input
                                id="charInput"
                                onBlur={this.onBlur}
                                className={styles.charInput}
                                value={this.state.character}
                                onChange={this.charChangeHandler}/>
                        </div>
                    </div>
                </div>
                <button className={styles.btn} onClick={this.nextStepHandler}>Save & Continue</button>
            </div>
        );
    }
}

export default stepOne;