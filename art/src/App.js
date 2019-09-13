import React from 'react';
import Quote from './component/Quote';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>LOOK HERE <span role="img" aria-label="eyes">
          🎙️
        </span>
      </h1>
      <Quote />
    </div>
  );
};

export default App;
