import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState = {showNav: false}) {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}