import { combineReducers } from 'redux';
import authReducer from './auth';
import browseReducer from './browse';
import createReducer from './create';
import profileReducer from './profile';

export default combineReducers({
    auth: authReducer,
    browse: browseReducer,
    create: createReducer,
    profile: profileReducer
})