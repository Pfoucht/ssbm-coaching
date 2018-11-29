import axios from 'axios';
import { FETCH_GIGS_LOADING, FETCH_GIGS_SUCCESS, FETCH_GIGS_FAIL, FETCH_SINGLE_GIG_SUCCESS, SET_BROWSE_PAGE, RESET_GIGS, NEXT_PAGE, PREV_PAGE } from './actionTypes';


export const fetchGigs = (page = 1) => {
    return dispatch => {
        console.log('running fetch');
        dispatch(resetGigs());
        window.scroll(0, 0);
        dispatch(setBrowsePage(page));
        dispatch(fetchGigsLoading());
        axios.get('http://localhost:8080/api/browse?page=' + page)
            .then(res => {
                console.log(res);
                dispatch(fetchGigsSuccess(res.data.posts, res.data.totalCount));
            })
            .catch(err => {
                dispatch(fetchGigsFail(err));
            })
    }
}

export const fetchSingleGig = (id) => {
    return dispatch => {
        console.log('running action');
        dispatch(fetchGigsLoading());
        axios.get('http://localhost:8080/api/browse/' + id)
            .then(res => {
                dispatch(fetchSingleGigSuccess(res.data.post));
            })
            .catch(err => {
                dispatch(fetchGigsFail(err));
            })
    }
}

export const searchForGigs = (search) => {
    return dispatch => {
        dispatch(fetchGigsLoading());
        axios.get('http://localhost:8080/api/browse/search/' + search)
            .then(res => {
                dispatch(fetchGigsSuccess(res.data.posts));
            })
            .catch(err => {
                dispatch(fetchGigsFail(err));
            })
    }
}

const setBrowsePage = (page) => {
    return {
        type: SET_BROWSE_PAGE,
        page: page
    }
}

const fetchSingleGigSuccess = (post) => {
    return {
        type: FETCH_SINGLE_GIG_SUCCESS,
        post: post
    }
}

const fetchGigsLoading = () => {
    return {
        type: FETCH_GIGS_LOADING
    }
}

const fetchGigsSuccess = (posts, count) => {
    return {
        type: FETCH_GIGS_SUCCESS,
        posts: posts,
        count: count
    }
}

const fetchGigsFail = () => {
    return {
        type: FETCH_GIGS_FAIL
    }
}

const resetGigs = () => {
    return {
        type: RESET_GIGS,
    }
}

export const nextPage = () => {
    return {
      type: NEXT_PAGE  
    }
}

export const prevPage = () => {
    return {
      type: PREV_PAGE
    }
}