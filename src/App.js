import React, { Component } from 'react';
import './App.css';

import Chatbot from 'react-chatbot-kit';

class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <Chatbot />
        </header>
      </div>
    )
  }
}

export default App;
