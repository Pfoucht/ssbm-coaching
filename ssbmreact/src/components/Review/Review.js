import React, { Component } from 'react'
import styles from './Review.css';
import { FaStar} from 'react-icons/fa';
import { IconContext } from 'react-icons';


class CreateReview extends Component {

    state = {
        starsHovered: 0,
        starRating: null,
        textarea: ""
    }

    componentDidMount(){
        console.log(this.props);
    }

    starHoverHandler = (num) => {
        if(this.state.starRating){
            return;
        }else{
            this.setState({
                starsHovered: num
            });
        }
    }

    starClickedHandler = (num) => {
        alert('selected')
        this.setState({
            starsHovered: num,
            starRating: num
        });
    }

    reviewSubmitHandler = () => {
        alert("REIVEW SUBMIT");
        this.props.publishReview(
            this.props.id,
            this.state.textarea,
            this.state.starRating
        );
    }

    render(){

        let ratingDescription = "Awful, now what I expected at all";
        if(this.state.starsHovered === 2){
            ratingDescription = "Poor, pretty dissapointed"
        }else if(this.state.starsHovered === 3){
            ratingDescription = "Average, could be better"
        }else if(this.state.starsHovered === 4){
            ratingDescription = "Good, what I expected"
        }else if(this.state.starsHovered === 5){
            ratingDescription = "Amazing, above expectations"
        }

        let elCard = null;

        if(this.props.post){
            elCard = (
                <div className={styles.card}>
                    <img className={styles.cardImg} src={this.props.post.coverPhoto}/>
                    <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{this.props.post.title}</h2>
                    <p>Authro</p>
                    </div>
                </div>
            )
        }
        
        return (
            <div className={styles.wrapper}>
            <div className={styles.container}>
            <div className={styles.row}>
            <div className={styles.reviewContent}>
            <div className={styles.title2}>Leave a Review</div>
            <div className={styles.content}>
            <p className={styles.ratingDescription}>{ratingDescription}</p>
            <IconContext.Provider value={{color: '#f4c150', size: '3rem', cursor: 'pointer'}}>
            <div >
                <FaStar className={styles.star} onClick={() => this.starClickedHandler(1)} onMouseOver={() => this.starHoverHandler(1)}  color={this.state.starsHovered >= 1 ? '#f4c150' : '#ccc'}/>
                <FaStar className={styles.star} onClick={() => this.starClickedHandler(2)} onMouseOver={() => this.starHoverHandler(2)} color={this.state.starsHovered >= 2 ? '#f4c150' :  '#ccc'}/>
                <FaStar className={styles.star} onClick={() => this.starClickedHandler(3)} onMouseOver={() => this.starHoverHandler(3)}  color={this.state.starsHovered >= 3 ? '#f4c150' :  '#ccc'}/>
                <FaStar className={styles.star} onClick={() => this.starClickedHandler(4)} onMouseOver={() => this.starHoverHandler(4)}  color={this.state.starsHovered >= 4 ? '#f4c150' :  '#ccc'}/>
                <FaStar className={styles.star} onClick={() => this.starClickedHandler(5)} onMouseOver={() => this.starHoverHandler(5)}  color={this.state.starsHovered >= 5 ? '#f4c150' :  '#ccc'}/>
            </div>

            </IconContext.Provider>
                <textarea value={this.state.textarea} onChange={(e) => this.setState({textarea: e.target.value})} className={styles.textarea} placeholder="Describe your experience, what you got out of the course, and other helpful highlights."/>
            </div>
            <button className={styles.btn} onClick={this.reviewSubmitHandler}>Publish</button>
            </div>
            <div className={styles.reviewCard}>
                {elCard}
            </div>
            </div>
            </div>
        </div>
        )
    }
}

export default CreateReview;