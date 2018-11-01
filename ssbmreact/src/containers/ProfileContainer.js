import React, { Component } from 'react'
import Profile from '../components/Profile/Profile';
import { connect } from 'react-redux';
import { fetchProfile, changeProfilePic } from '../store/actions';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends Component{
    

    componentDidMount(){
        console.log(this.props);
        let username = this.props.match.params.username;
        this.props.onFetchProfile(username);
    }

    changeProfilePicHandler = (fileURL) => {
        this.props.onChangePicture(fileURL, this.props.token);
    }

    render(){
        return (
            <Profile profilePicture={this.props.profilePicture} changeProfilePicture={this.changeProfilePicHandler} username={this.props.username} gigs={this.props.gigs}/>
        )
    }
}

const mapStateToProps = state => {
    return state => {
        return {
            username: state.profile.username,
            gigs: state.profile.gigs,
            loading: state.profile.loading,
            token: state.auth.token,
            profilePicture: state.profile.profilePicture
        }
    }
}

const mapDispatchToProps = dispatch => {
    return dispatch => {
        return {
            onFetchProfile: (username) => dispatch(fetchProfile(username)),
            onChangePicture: (fileURL, token) => dispatch(changeProfilePic(fileURL, token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);