import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <Provider store={configureStore()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById('root')
);
registerServiceWorker();
