import React, { Component } from 'react';
import Create from '../components/Create/Create';

class CreateContainer extends Component{
    
    state = {
        step: 1
    }

    nextStepHandler = () => {
        this.setState(prevState => {
            return {
                step: prevState.step + 1
            }
        })
    }

    render(){
        return (
            <Create nextStep={this.nextStepHandler} step={this.state.step}/>
        );
    }
}

export default CreateContainer;