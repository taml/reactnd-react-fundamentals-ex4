import React, { Component } from 'react';
import GameContent from './GameContent';
import GameInfo from './GameInfo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    numQuestions: 0,
    numCorrect: 0
  }

  reviewInput = answeredCorrectly => {
    if(answeredCorrectly) {
       this.setState(currentState => ({
          numCorrect: currentState.numCorrect + 1           
       }))
    }
    this.setState(currentState => ({
          numQuestions: currentState.numQuestions + 1           
    }))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
		  <GameContent reviewInput={this.reviewInput} />	
          <GameInfo numberCorrect={this.state.numCorrect} numberQuestions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
