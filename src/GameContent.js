import React, {Component} from 'react';

class GameContent extends Component {
  
  constructor(props) {
    super(props);
    const numsArr = this.createNumbers();
    this.state = {
      value1: numsArr[0],
      value2: numsArr[1],
      value3: numsArr[2],
      proposedAnswer: numsArr[3],
    };
  }
  
  createNumbers = () => {
    const value1 = Math.floor(Math.random() * 100)
    const value2 = Math.floor(Math.random() * 100)
    const value3 = Math.floor(Math.random() * 100)
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3)
    return [value1, value2, value3, proposedAnswer]
  }

  updateState = newNumsArr => {
    this.setState(currState => ({
      value1: newNumsArr[0],
      value2: newNumsArr[1],
      value3: newNumsArr[2],
      proposedAnswer: newNumsArr[3]
    }))
  }

  reviewInput = event => {
    const newNums = this.createNumbers();
    this.updateState(newNums);
    const rightAnswer = this.checkAnswer(event.target.name);
    this.props.reviewInput(rightAnswer);
  }

  checkAnswer(userInput) {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const solution = value1 + value2 + value3;

    return (
      (solution === proposedAnswer && userInput === 'true') ||
      (solution !== proposedAnswer && userInput === 'false')
    );
  }
 
  
  render() {
   const { value1, value2, value3, proposedAnswer } = this.state;
    return(
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={this.reviewInput} name="true">
          True
        </button>
        <button name="false" onClick={this.reviewInput}>
          False
        </button>
      </div>
    )
  }
}

export default GameContent
