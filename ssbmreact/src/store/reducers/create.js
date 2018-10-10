import { CREATE_GIGS_LOADING, CREATE_GIGS_SUCCESS, CREATE_GIGS_FAIL } from "../actions/actionTypes";

const initialState = {
    posts: null,
    loading: false,
    error: null
}

const createReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_GIGS_LOADING:
            return {
                ...state,
                loading: true
            }
        case CREATE_GIGS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.posts
            }
        case CREATE_GIGS_FAIL:
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