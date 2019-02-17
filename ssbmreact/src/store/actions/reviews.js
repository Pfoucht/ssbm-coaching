
import axios from 'axios';
import { PUBLISH_REVIEW_SUCCESS } from './actionTypes';


export const publishReview = (id, review, starRating, token) => {
    return dispatch => {
        alert('PUBLISHING');
        alert(id);
        alert(review);
        alert(starRating);
        let obj = {
            review: review,
            starRating: starRating
        }
        console.log('PUBLISHING REVIEW');
        axios.post('http://localhost:8080/api/reviews/' + id + '/create?token=' + token , obj)
            .then(res => {
                console.log(res);
                dispatch(publishReviewSuccess());
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const publishReviewSuccess = () => {
    alert('success');
    return {
        type: PUBLISH_REVIEW_SUCCESS
    }
}

