import { combineReducers } from 'redux';
import authReducer from './auth';
import browseReducer from './browse';
import createReducer from './create';
import profileReducer from './profile';
import reviewReducer from './reviews';

export default combineReducers({
    auth: authReducer,
    browse: browseReducer,
    create: createReducer,
    profile: profileReducer,
    review: reviewReducer
})