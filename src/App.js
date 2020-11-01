import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const test = async function(){
  const result = await axios.get('http://localhost:5000/test')
  const res = result.data.success;
  console.log(res)
}

function App() {
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
        <button onClick={test}>test</button>
      </header>
    </div>
  );
}

export default App;
