import React, {Component} from 'react';
import styles from './StepTwo.css';
import ReactQuill from 'react-quill';

class StepTwo extends Component {
    state = {
        text: ''
    }

    changeHandler = (val) => {
        this.setState({text: val});
        console.log(this.state.text);
    }

    continueHandler = () => {
        this.props.finishStepTwo(this.state.text);
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title2}>Description</div>
                <p className={styles.desc}>Briefly describe your coaching gig</p>
                <ReactQuill
                    theme="snow"
                    className={styles.quill}
                    value={this.state.text}
                    onChange={this.changeHandler}/>
                <div className={styles.editorFooter}>
                    <span>min. 50</span>
                    <span>11/1200 Characters</span>
                </div>
                <button className={styles.btn} onClick={this.continueHandler}>Save & Continue</button>
            </div>
        );
    }
}

export default StepTwo;