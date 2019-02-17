import { PUBLISH_REVIEW_LOADING, PUBLISH_REVIEW_FAIL, PUBLISH_REVIEW_SUCCESS } from '../actions/actionTypes';

const initialState = {
    loading: false,
    complete: false,
    error: null
}

const reviewReducer = (state = initialState, action) => {
    console.log('in the reducer');
    switch(action.type){
        case PUBLISH_REVIEW_LOADING:
            return {
                ...state,
            }
        case PUBLISH_REVIEW_FAIL:
            return {
                ...state,
                error: "There was an error publish your review..."
            }
        case PUBLISH_REVIEW_SUCCESS:
            console.log('REDUCER DONE');
            return {
                loading: false,
                error: null,
                complete: true
            }

        default:
            return state;
    }
}

export default reviewReducer;