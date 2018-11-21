import axios from 'axios';
import { CREATE_GIG_LOADING, CREATE_GIG_SUCCESS, CREATE_GIG_FAIL } from './actionTypes';


export const createGig = (title, game, rank, pricing, characters, desc, coverPhoto, token) => {
    console.log(desc);
    return dispatch => {
        dispatch(createGigLoading());
        let obj = {
            title: title,
            game: game,
            rank: rank,
            characters: characters,
            pricing: pricing,
            description: desc,
            coverPhoto: coverPhoto
        }
        console.log(obj);
        axios.post('http://localhost:8080/api/create?token=' + token, obj)
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