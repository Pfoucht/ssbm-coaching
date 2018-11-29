import { FETCH_GIGS_LOADING, FETCH_GIGS_SUCCESS, FETCH_GIGS_FAIL, FETCH_SINGLE_GIG_SUCCESS, SET_BROWSE_PAGE, RESET_GIGS } from "../actions/actionTypes";

const initialState = {
    posts: null,
    loading: false,
    error: null,
    detailPost: null,
    page: 1,
    search: null
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
                posts: action.posts,
                search: action.search
            }
        case FETCH_GIGS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case SET_BROWSE_PAGE:
            return {
                ...state,
                page: action.page
            }
        case RESET_GIGS:
            return {
                ...state,
                posts: null
            }
        default:
            return {
                ...state
            }
    }
}


export default browseReducer;