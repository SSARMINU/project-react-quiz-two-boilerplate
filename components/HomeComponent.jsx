// HomeComponent.js
import React from 'react';

function HomeComponent({ startQuiz }) {
  return (
    <div className="home">
      <h1>Welcome to the Quiz</h1>
      <button onClick={startQuiz} className="play-button">Play</button>
    </div>
  );
}

export default HomeComponent;
