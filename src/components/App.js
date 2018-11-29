import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar'

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
  }
  render() {
    return (
      <div className="App">
        <Toolbar/>
      </div>
    );
  }
}

export default App;
