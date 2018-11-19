import axios from 'axios';
import { FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAIl, FETCH_PROFILE_LOADING, CHANGE_PROFILE_PIC_SUCCESS } from './actionTypes';



export const changeProfilePic = (fileURL, token) => {
    return dispatch => {
        let obj = {
            fileURL: fileURL
        }
        axios.post('http://localhost:8080/api/profile/img?token=' + token, obj)
        .then(res => {
            dispatch(changeProfilePicSuccess(res.data.profilePic))
        })
        .catch(error => {

        })
    }

}

export const fetchProfile = (username, token) => {
    return dispatch => {
        dispatch(fetchProfileLoading());
        if(!token){
            token = localStorage.getItem('token');
        }
        axios.get('http://localhost:8080/api/profile/' + username + "?token=" + token)
            .then(res => {
                console.log(res);
                dispatch(fetchProfileSuccess(res.data.username, res.data.gigs, res.data.profilePicture, res.data.isOwnProfile));
            })
            .catch(error => {
                dispatch(fetchProfileFail());
            });
    }
} 

const fetchProfileSuccess = (username, gigs, profilePicture, isOwnProfile) => {
    return {
        type: FETCH_PROFILE_SUCCESS,
        username: username,
        gigs: gigs,
        profilePicture: profilePicture,
        isOwnProfile: isOwnProfile
    }
}


const fetchProfileFail = (error) => {
    return {
        type: FETCH_PROFILE_FAIl,
        error: error
    }
}

const fetchProfileLoading = () => {
    return {
        type: FETCH_PROFILE_LOADING
    }
}


const changeProfilePicSuccess = (fileURL) => {
    return {
        type: CHANGE_PROFILE_PIC_SUCCESS,
        fileURL: fileURL
    }
}