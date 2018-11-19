import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleAuthSlider, searchForGigs } from '../store/actions/index';
import Nav from '../components/Nav/Nav'
import { authLogout } from '../store/actions/auth';

class NavContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav 
                navClick={this.props.onAuthSlide} 
                isAuthenticated={this.props.isAuthenticated}
                logout={this.props.onLogout}
                profilePicture={this.props.profilePicture}
                username={this.props.username}
                searchGigs={this.props.onSearchGigs}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        profilePicture: state.auth.profilePicture,
        username: state.auth.username
    }
}

const mapDispatchToProps = dispatch => ({
    onAuthSlide: (mode) => dispatch(toggleAuthSlider(mode)),
    onLogout: () => dispatch(authLogout()),
    onSearchGigs: (search) => dispatch(searchForGigs(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);