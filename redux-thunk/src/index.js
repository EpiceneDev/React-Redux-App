import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'thunk';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware())//any loggers always past in last to applyMiddleware

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));