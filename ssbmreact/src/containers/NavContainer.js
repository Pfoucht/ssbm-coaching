import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navAction } from '../actions/NavAction';


import Nav from '../components/Nav'

class NavContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav 
                navOpen={this.props.navReducer.navOpen}
                navClick={this.props.navAction}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    navAction: () => dispatch(navAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);