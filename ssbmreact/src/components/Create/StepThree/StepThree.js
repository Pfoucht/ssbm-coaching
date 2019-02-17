import React, {Component} from 'react';
import styles from './StepThree.css';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';

class StepThree extends Component {

state = {
    uploadedImg: null,
    fileURL: null,
    loading: false
}

 onDrop = (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles[0]);
    let img = acceptedFiles[0];
    this.setState({uploadedImg: img, loading: true});
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
            fileURL: fileURL,
            loading: false
        });
    })
}   


continueHandler = () => {
    this.props.finishStepThree(this.state.fileURL);
}

render(){

    let spinner = null;
    if(this.state.loading){
        spinner = <Spinner/>
    }
return (
    <div className={styles.container}>
        <div className={styles.title2}>Cover Photo</div>
        <Dropzone className={this.state.loading ? styles.dropzoneLoading : styles.dropzone} onDrop={this.onDrop}>
        {this.state.uploadedImg ?
            <img className={styles.previewImg} src={this.state.uploadedImg.preview} alt="preview"/>
            :
            null
        }
        {spinner}
        </Dropzone>
        <div>
        <span className={styles.back}>Go Back</span>
        <button disabled={this.state.loading} className={styles.btn} onClick={this.continueHandler}>Save & Continue</button>

        </div>
    </div>
)};
}

export default StepThree;