import React from 'react';


const GameInfo = props => {
  return(
    <p className="text">
         Your Score: {props.numberCorrect}/{props.numberQuestions}
    </p>
  )
}

export default GameInfo