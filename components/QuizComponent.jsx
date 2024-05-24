import React, { useState } from "react";
import "../css/QuizComponent.css";

export default function QuizComponent({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleQuit = () => {
    if (window.confirm("Do you want to quit?")) {
      window.location.reload(false);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="question">
      <h2>Question</h2>
      <div>
        <span>{currentQuestion + 1} of {questions.length}</span>
        <h5>{question.question}</h5>
      </div>
      <div className="option-container">
        <p className="option">{question.optionA}</p>
        <p className="option">{question.optionB}</p>
      </div>
      <div className="option-container">
        <p className="option">{question.optionC}</p>
        <p className="option">{question.optionD}</p>
      </div>
      <div className="button-container">
        <button className="button previous" onClick={handlePrev}>Previous</button>
        <button className="button next" onClick={handleNext}>Next</button>
        <button className="button quit" onClick={handleQuit}>Quit</button>
      </div>
    </div>
  );
}
