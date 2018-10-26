import { AUTH_LOADING, AUTH_FAIL, AUTH_SUCCESS, AUTH_SLIDE, AUTH_LOGOUT, CHANGE_AUTH_MODE } from "./actionTypes";
import axios from 'axios';

export const authenticate = (username, email, password, loginMode) => {
    // Example of redux thunk with axios;
    return dispatch => {   
        console.log(username, email, password);
        dispatch(authLoading());
        let authInfo = {
            username: username,
            email, email,
            password: password
        };

        let url = 'http://localhost:8080/api/auth/register';

        if(loginMode){
            url = 'http://localhost:8080/api/auth/login';
        }

        axios.post(url, authInfo)
            .then(res => {
                console.log(res);

                const { token, username, expiration} = res.data;

                setLocalStorage(token, username, 1, expiration);

                dispatch(authSuccess(username, token));
            })

    };
}

export const toggleAuthSlider = (mode) => {

    return {
        type: AUTH_SLIDE,
        mode: mode
    }
}

export const authSuccess = (username, token) => {
    return {
        type: AUTH_SUCCESS,
        username: username,
        token: token
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


const setLocalStorage = (token, username, userId, expiration) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId);
    localStorage.setItem('expiration', expiration);
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const expiration = localStorage.getItem('expiration');
        const username = localStorage.getItem('username');
    
        if(!token){
            authLogout();
        }else {
            const expirationDate = new Date(expiration);
    
            if(expirationDate <= new Date()){
                dispatch(authLogout())
            }else if(!username){
                dispatch(authLogout())
            }else{
                dispatch(authSuccess(username, token));
            }
    }

    }
}


export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiration');
    return {
        type: AUTH_LOGOUT
    }
}