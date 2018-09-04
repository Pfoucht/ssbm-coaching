import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAIL, AUTH_SLIDE } from '../actions/actionTypes';

const initialState = {
    username: null,
    token: null,
    loading: false,
    error: null,
    sliderOpen: false
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
                token: action.token
            }
        case AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case AUTH_SLIDE:
            return {
                ...state,
                sliderOpen: !state.sliderOpen
            }
        default: return state;
    }
};

export default authReducer;