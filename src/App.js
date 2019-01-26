import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// State
class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: props.start
    }
  }
  //Lifecycle
  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.addInterval)
  }
  increase() {
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }
  render() {
    return (
      <div>{this.state.time} Second</div>
    );
  }
}

function Clicker() {
  function handleCLick(e) {
    alert('I Got Click!')
    e.preventDefault()
  }

  return (
    <a href="#" onClick={handleCLick}>CLick Me!</a>
  )
}

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleStatus: true
    }

    this.handByClick = this.handByClick.bind(this)
  }

  handByClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render() {
    return (
      <button onClick={this.handByClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'} 
        <p>{this.state.toggleStatus ? 'Enabled' : 'Disabled'} </p>
      </button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer start="0"/> <br/>
          <Clicker /> <br/>
          <Toggle />
        </header>
      </div>
    );
  }
}

export default App;
