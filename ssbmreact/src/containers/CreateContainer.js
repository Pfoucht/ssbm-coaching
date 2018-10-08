import React, { Component } from 'react';
import Create from '../components/Create/Create';

class CreateContainer extends Component{
    
    state = {
        step: 1,
        gigGame: null,
        rank: null,
        pricing: null,
        charArr: null,
        gigDescription: null
    }

    nextStepHandler = (game, rank, pricing, chars) => {
        this.setState(prevState => {
            return {
                step: 2,
                gigGame: game,
                rank: rank,
                pricing: pricing,
                charArr: chars
            }
        })
    }



    finishStepTwoHandler = (description) => {
        this.setState({
            gigDescription: description,
            step: 3
        });
    }


    render(){
        return (
            <Create nextStep={this.nextStepHandler} step={this.state.step} finishStepTwo={this.finishStepTwoHandler}/>
        );
    }
}

export default CreateContainer;