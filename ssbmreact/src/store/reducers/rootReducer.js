import { combineReducers } from 'redux';
import authReducer from './auth';
import browseReducer from './browse';
import createReducer from './create';

export default combineReducers({
    auth: authReducer,
    browse: browseReducer,
    create: createReducer
})