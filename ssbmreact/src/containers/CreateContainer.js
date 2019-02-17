import React, { Component } from 'react';
import Create from '../components/Create/Create';
import { connect } from 'react-redux';
import { createGig } from '../store/actions/gig';

class CreateContainer extends Component{
    
    state = {
        step: 1,
        highestStep: 1,
        title: null,
        gigGame: null,
        rank: null,
        pricing: null,
        charArr: null,
        gigDescription: null,
        coverPhoto: null
    }

    nextStepHandler = (title, game, rank, pricing, chars) => {
        this.setState(prevState => {
            return {
                step: 2,
                highestStep: 2,
                title: title,
                gigGame: game,
                rank: rank,
                pricing: pricing,
                charArr: chars
            }
        })
    }



    finishStepTwoHandler = (description) => {
        console.log(description);
        this.setState({
            gigDescription: description,
            step: 3,
            highestStep: 3
        });
    }

    finishStepThreeHandler = (fileURL) => {
        this.setState({
            coverPhoto: fileURL,
            step: 4,
            highestStep: 4
        });
    }

    publishGigHandler = () => {
        this.props.onCreateGig(
            this.state.title,
            this.state.gigGame,
            this.state.rank,
            this.state.pricing,
            this.state.charArr,
            this.state.gigDescription,
            this.state.coverPhoto,
            this.props.token
        );
    }

    changeStepHandler = step => {
        this.setState({step: step});
    }


    render(){
        return (
            <Create 
                publishGig={this.publishGigHandler} 
                finishStepThree={this.finishStepThreeHandler} 
                nextStep={this.nextStepHandler}
                highestStep={this.state.highestStep}
                step={this.state.step} 
                finishStepTwo={this.finishStepTwoHandler}
                changeStep={this.changeStepHandler}
                />
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch => {
        return {
            onCreateGig: (title, game, rank, pricing, characters, desc, coverPhoto, token) => dispatch(createGig(title, game, rank, pricing, characters, desc, coverPhoto, token))
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(CreateContainer);