import axios from 'axios';
import { FETCH_GIGS_LOADING, FETCH_GIGS_SUCCESS, FETCH_GIGS_FAIL } from './actionTypes';


export const fetchGigs = () => {
    return dispatch => {
        dispatch(fetchGigsLoading());
        axios.get('OURURLHERE')
            .then(res => {

            })
            .catch(err => {
                dispatch(fetchGigsFail(err));
            })
    }
}



const fetchGigsLoading = () => {
    return {
        type: FETCH_GIGS_LOADING
    }
}

const fetchGigsSuccess = () => {
    return {
        type: FETCH_GIGS_SUCCESS
    }
}

const fetchGigsFail = () => {
    return {
        type: FETCH_GIGS_FAIL
    }
}