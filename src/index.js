import React from 'react';
import { render } from 'react-dom';
import store from './store/index.js';
import { Provider } from 'react-redux';
import App from './containers/index.js';

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);