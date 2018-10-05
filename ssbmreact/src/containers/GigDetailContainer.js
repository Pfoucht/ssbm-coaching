import React, { Component } from 'react';
import GigDetail from '../components/GigDetail/GigDetail';


class GigDetailContainer extends Component {

    goBackHandler = () => {
        console.log(this.props.history.goBack());
    }

    render(){
        return (
            <GigDetail goBack={this.goBackHandler}/>
        );
    }
}

export default GigDetailContainer;