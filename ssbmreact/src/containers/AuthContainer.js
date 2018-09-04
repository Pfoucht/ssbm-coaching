import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../components/Auth/Auth';
import { authenticate, toggleAuthSlider } from '../store/actions/index';

class AuthContainer extends Component {

    authHandler = (username, email, password) => {
        this.props.onAuthenticate(username, email, password);
    }

    render(){
        return (
            <Auth 
                authenticate={this.authHandler} 
                toggle={this.props.onToggleSlider} 
                navOpen={this.props.sliderOpen}
                loading={this.props.loading}
                />
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token,
    loading: state.auth.loading,
    error: state.auth.error,
    sliderOpen: state.auth.sliderOpen
})

const mapDispatchToProps = dispatch => ({
    onAuthenticate: (username, email, password) => dispatch(authenticate(username, email, password)),
    onToggleSlider: () => dispatch(toggleAuthSlider())
});


export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);