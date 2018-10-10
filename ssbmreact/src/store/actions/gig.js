import axios from 'axios';
import { CREATE_GIG_LOADING, CREATE_GIG_SUCCESS, CREATE_GIG_FAIL } from './actionTypes';


export const createGig = (game, characters, pricing) => {
    return dispatch => {
        dispatch(createGigLoading());
        let obj = {
            game: game,
            characters: characters,
            pricing: pricing
        }
        axios.post('OURURLHERE', obj)
        .then(res => {
            return;
        })
        .catch(err => {
            dispatch(createGigFail());
        })
    }

}


const createGigLoading = () => {
    return {
        type: CREATE_GIG_LOADING
    }
}

const createGigSuccess = () => {
    return {
        type: CREATE_GIG_SUCCESS
    }
}

const createGigFail = () => {
    return {
        type: CREATE_GIG_FAIL
    }
}