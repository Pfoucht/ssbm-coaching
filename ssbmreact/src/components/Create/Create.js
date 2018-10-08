import React, {Component} from 'react';
import styles from './Create.css';
import Dropzone from 'react-dropzone';
import Nav from './Nav/Nav';

import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import Publish from './Publish/Publish';

class create extends Component {
    render() {
        let editor = null;
        if (this.props.step == 1) {
            editor = <StepOne nextStep={this.props.nextStep}/>
        } else if(this.props.step == 2){
            editor = <StepTwo finishStepTwo={this.props.finishStepTwo}/>
        }else{
            editor = <Publish/>
        }

        return (
            <div className={styles.wrapper}>
                <Nav/>
                {editor}
            </div>
        )
    }

}

// <Dropzone className={styles.dropzone}>     <img
// src="https://www.materialui.co/materialIcons/file/cloud_upload_grey_192x192.pn
// g" className={styles.uploadImg}/> </Dropzone>
export default create;