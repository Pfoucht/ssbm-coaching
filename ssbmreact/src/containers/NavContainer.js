import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleAuthSlider } from '../store/actions/index';
import Nav from '../components/Nav/Nav'

class NavContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav 
                navClick={this.props.onAuthSlide}/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    onAuthSlide: () => dispatch(toggleAuthSlider())
});

export default connect(null, mapDispatchToProps)(NavContainer);