import { AUTH_LOADING, AUTH_FAIL, AUTH_SUCCESS, AUTH_SLIDE } from "./actionTypes";
// import axios from 'axios';

export const authenticate = (username, email, password) => {
    // Example of redux thunk with axios;
    return dispatch => {   
        console.log(username, email, password);
        dispatch(authLoading());
        let authInfo = {
            username: username,
            email, email,
            password: password
        };
        // axios.post('ourURLgoeshere.com', authInfo)
        //     .then(res => {
        //         dispatch(authSuccess(res.data.username, res.data.idToken))
        //     })
        //     .catch(error => {
        //         dispatch(authFail(error.data.error))
        //     });
    };
}

export const toggleAuthSlider = () => {
    return {
        type: AUTH_SLIDE
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