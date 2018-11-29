import { FETCH_GIGS_LOADING, FETCH_GIGS_SUCCESS, FETCH_GIGS_FAIL, FETCH_SINGLE_GIG_SUCCESS, SET_BROWSE_PAGE, RESET_GIGS, PREV_PAGE, NEXT_PAGE } from "../actions/actionTypes";

const initialState = {
    posts: null,
    loading: false,
    error: null,
    detailPost: null,
    page: 1,
<<<<<<< HEAD
    count: 0
=======
    search: null
>>>>>>> 3e4160ba93012125ec9036a81e4b097d23c202b4
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
<<<<<<< HEAD
                count: action.count
=======
                search: action.search
>>>>>>> 3e4160ba93012125ec9036a81e4b097d23c202b4
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
        case PREV_PAGE:
            let page = state.page;
            page -= 1;
            if(page < 0){
                page = 0;
            }
            return {
                ...state,
                page: page
            }
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        default:
            return {
                ...state
            }
    }
}


export default browseReducer;