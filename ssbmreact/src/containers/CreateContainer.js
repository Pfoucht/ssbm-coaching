import React, { Component } from 'react';
import Create from '../components/Create/Create';
import { connect } from 'react-redux';
import { createGig } from '../store/actions/gig';

class CreateContainer extends Component{
    
    state = {
        step: 1,
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
            step: 3
        });
    }

    finishStepThreeHandler = (fileURL) => {
        console.log(fileURL);
        this.setState({
            coverPhoto: fileURL,
            step: 4
        });
    }

    publishGigHandler = () => {
        console.log(this.state);
        console.log("HERE I AM WILLYAM");
        console.log(this.state.gigDescription);
        console.log(this.state);
        console.log(this.props);
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


    render(){
        return (
            <Create publishGig={this.publishGigHandler} finishStepThree={this.finishStepThreeHandler} nextStep={this.nextStepHandler} step={this.state.step} finishStepTwo={this.finishStepTwoHandler}/>
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