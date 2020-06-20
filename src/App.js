import React from 'react';
import logo from './logo.svg';
import ThemeContext from '../Context/ThemeContext';

import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const theme = 'light';
return (
  <ThemeContext.Provider value={theme}>
    <div></div>
  </ThemeContext.Provider>
)

export default App;
