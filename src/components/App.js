import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar'
import Compose from './Compose'
import MessageList from './MessageList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []

    }
  }

  async componentDidMount() {
    // API call
    const response = await fetch('http://localhost:8082/api/messages');
    const json = await response.json();
    // Set State
    this.setState({ messages: json });
    // console.log(this.messages)
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Toolbar />
          <Compose />
          <MessageList messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

export default App;
