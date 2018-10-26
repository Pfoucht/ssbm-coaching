import { FETCH_GIGS_LOADING, FETCH_GIGS_SUCCESS, FETCH_GIGS_FAIL, FETCH_SINGLE_GIG_SUCCESS } from "../actions/actionTypes";

const initialState = {
    posts: null,
    loading: false,
    error: null,
    detailPost: null
}

const browseReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_GIGS_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_SINGLE_GIG_SUCCESS:
            console.log(state.posts);
            return {
                ...state,
                loading: false,
                detailPost: action.post
            }
        case FETCH_GIGS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.posts
            }
        case FETCH_GIGS_FAIL:
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


export default browseReducer;