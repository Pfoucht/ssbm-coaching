import { AUTH_LOADING, AUTH_FAIL, AUTH_SUCCESS, AUTH_SLIDE, AUTH_LOGOUT, CHANGE_AUTH_MODE } from "./actionTypes";
import axios from 'axios';

export const authenticate = (username, email, password, loginMode) => {
    return dispatch => {   
        dispatch(authLoading());
        let authInfo = {
            username: username,
            email: email,
            password: password
        };

        let url = 'http://localhost:8080/api/auth/register';

        if(loginMode === 'login'){
            url = 'http://localhost:8080/api/auth/login';
        }

        axios.post(url, authInfo)
            .then(res => {
                console.log(res);

                const { token, username, expiration, profilePicture} = res.data;

                setLocalStorage(token, username, 1, expiration, profilePicture);

                dispatch(authSuccess(username, token, profilePicture));
            })

    };
}

export const toggleAuthSlider = (mode) => {
    return {
        type: AUTH_SLIDE,
        mode: mode
    }
}

export const authSuccess = (username, token, profilePicture) => {
    return {
        type: AUTH_SUCCESS,
        username: username,
        token: token,
        profilePicture: profilePicture
    };
}

export const authLoading = () => {
    return {
        type: AUTH_LOADING
    };
}

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        error: error
    };
}

export const changeAuthMode = (mode) => {
    return {
        type: CHANGE_AUTH_MODE,
        mode: mode
    }
}


const setLocalStorage = (token, username, userId, expiration, profilePicture) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId);
    localStorage.setItem('expiration', expiration);
    localStorage.setItem('profilePicture', profilePicture);
    
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const expiration = localStorage.getItem('expiration');
        const username = localStorage.getItem('username');
        const profilePicture = localStorage.getItem('profilePicture');
    
        if(!token){
            authLogout();
        }else {
            const expirationDate = new Date(expiration);
    
            if(expirationDate <= new Date()){
                dispatch(authLogout())
            }else if(!username){
                dispatch(authLogout())
            }else{
                dispatch(authSuccess(username, token, profilePicture));
            }
    }

    }
}


export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiration');
    localStorage.removeItem('profilePicture');
    return {
        type: AUTH_LOGOUT
    }
}