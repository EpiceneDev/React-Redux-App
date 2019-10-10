import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer

const store = createStore(rootReducer, applyMiddleware())//any loggers always past in last

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
