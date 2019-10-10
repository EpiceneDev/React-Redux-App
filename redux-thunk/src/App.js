import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { applyMiddleware } from 'redux-thunk';
import rootReducer from './reducer';


const store = createStore(rootReducer, applyMiddleware())//any loggers always past in last

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
