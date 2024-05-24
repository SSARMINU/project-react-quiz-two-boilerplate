import React, { useState } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import questionsData from './resources/quizQuestions.json';

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const questions = questionsData;
  const question = questions[currentQuestion];

  const handleAnswer = (isCorrect) => {
    setAttemptedQuestions(attemptedQuestions + 1);
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  return (
    <div className="App">
      {isQuizStarted ? (
        currentQuestion < questions.length ? (
          <QuizComponent questions={questions} />
        ) : (
          <ResultComponent
            totalQuestions={questions.length}
            attemptedQuestions={attemptedQuestions}
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
          />
        )
      ) : (
        <HomeComponent startQuiz={startQuiz} />
      )}
    </div>
  );
}

export default App;
