import React from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';

function App() {
  // window.ethereum
  //   .enable() // request the user to use the provider
  //   .then(
  //     web3.eth
  //       .getAccounts()
  //       .then(console.log)
  //       .catch(console.error)
  //   )
  //   .catch(err => {
  //     console.error('not approvede', err);
  //     window.close();
  //   });
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
}

export default App;
