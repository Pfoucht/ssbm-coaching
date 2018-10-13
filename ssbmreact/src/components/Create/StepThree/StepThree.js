import React, {Component} from 'react';
import styles from './StepThree.css';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class StepThree extends Component {

state = {
    uploadedImg: null,
    fileURL: null
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
        this.setState({
            fileURL: fileURL
        });
    })
}   


continueHandler = () => {
    this.props.finishStepThree(this.state.fileURL);
}

render(){
return (
    <div className={styles.container}>
        <div className={styles.title2}>Cover Photo</div>
        <Dropzone className={styles.dropzone} onDrop={this.onDrop}>
        {this.state.uploadedImg ?
            <img className={styles.previewImg} src={this.state.uploadedImg.preview} alt="preview"/>
            :
            null
        }
        </Dropzone>
        <div>
        <span className={styles.back}>Go Back</span>
        <button className={styles.btn} onClick={this.continueHandler}>Save & Continue</button>

        </div>
    </div>
)};
}

export default StepThree;