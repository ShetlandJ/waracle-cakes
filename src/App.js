import React, { Component } from 'react';
import Cakes from './cakes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Waracle Cakes Demo</h2>
          <h3>John Pollard (<a href="mailto:johnp@bravelocation.com" className="App-Header-MailLink">johnp@bravelocation.com</a>)</h3>
        </div>

        <Cakes url="http://52.31.91.48:5000/api/cakes" />
      </div>
    );
  }
}

export default App;
