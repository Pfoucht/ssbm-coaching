import { CREATE_GIG_LOADING, CREATE_GIG_SUCCESS, CREATE_GIG_FAIL } from "../actions/actionTypes";

const initialState = {
    posts: null,
    loading: false,
    error: null
}

const createReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_GIG_LOADING:
            return {
                ...state,
                loading: true
            }
        case CREATE_GIG_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.posts
            }
        case CREATE_GIG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}       


export default createReducer;