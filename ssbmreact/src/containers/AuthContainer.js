import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../components/Auth/Auth';
import { authenticate, toggleAuthSlider, changeAuthMode } from '../store/actions/index';

class AuthContainer extends Component {

    authHandler = (username, email, password, loginMode) => {
        this.props.onAuthenticate(username, email, password, loginMode);
    }

    render(){
        return (
            <Auth 
                authenticate={this.authHandler} 
                toggle={this.props.onToggleSlider} 
                navOpen={this.props.sliderOpen}
                loading={this.props.loading}
                authMode={this.props.authMode}
                switchAuthMode={this.props.onSwitchAuthMode}
                />
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token,
    loading: state.auth.loading,
    error: state.auth.error,
    sliderOpen: state.auth.sliderOpen,
    authMode: state.auth.authMode
})

const mapDispatchToProps = dispatch => ({
    onAuthenticate: (username, email, password, loginMode) => dispatch(authenticate(username, email, password, loginMode)),
    onToggleSlider: () => dispatch(toggleAuthSlider()),
    onSwitchAuthMode: (mode) => dispatch(changeAuthMode(mode))
});


export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);