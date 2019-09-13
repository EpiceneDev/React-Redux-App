// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import { reducer } from './reducer';
// import App from './App';
// import './index.css';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducer,
//   composeEnhancers(applyMiddleware(thunk))
// );


// const rootElement = document.getElementById("root");

// ReactDOM.render(
// <Provider store={store}>
//     <App />
// </Provider>, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import {reducer} from "./reducers"

import "./styles.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const kanyeState = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={kanyeState}><App /></Provider>, rootElement);
