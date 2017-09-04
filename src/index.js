import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'knacss/css/knacss.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { reducer } from './reducer';

let store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
