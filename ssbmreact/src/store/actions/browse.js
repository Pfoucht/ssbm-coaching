import axios from 'axios';
import { FETCH_GIGS_LOADING, FETCH_GIGS_SUCCESS, FETCH_GIGS_FAIL, FETCH_SINGLE_GIG_SUCCESS } from './actionTypes';


export const fetchGigs = () => {
    return dispatch => {
        console.log('running fetch')
        dispatch(fetchGigsLoading());
        axios.get('http://localhost:8080/api/browse')
            .then(res => {
                console.log(res);
                dispatch(fetchGigsSuccess(res.data.posts));
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

const fetchGigsSuccess = (posts) => {
    return {
        type: FETCH_GIGS_SUCCESS,
        posts: posts
    }
}

const fetchGigsFail = () => {
    return {
        type: FETCH_GIGS_FAIL
    }
}