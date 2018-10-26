import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAIL, AUTH_SLIDE, AUTH_LOGOUT, CHANGE_AUTH_MODE } from '../actions/actionTypes';

const initialState = {
    username: null,
    token: null,
    loading: false,
    error: null,
    sliderOpen: false,
    authMode: 'login'
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                username: action.username,
                token: action.token,
                sliderOpen: false
            }
        case AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case AUTH_SLIDE:
            let mode = action.mode;
            if(!action.mode){
                mode = state.authMode;
            }
            return {
                ...state,
                sliderOpen: !state.sliderOpen,
                authMode: mode
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                username: null,
                token: null
            }
        case CHANGE_AUTH_MODE:
            console.log(action.mode);
            return {
                ...state,
                authMode: action.mode
            }
        default: return state;
    }
};

export default authReducer;