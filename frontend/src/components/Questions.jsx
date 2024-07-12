import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const questions = [
  { type: "text", question: "What is your name?" },
  { type: "text", question: "How old are you?" },
  { type: "select", question: "What is your favorite color?", options: ["Red", "Green", "Blue", "Yellow", "Other"] },
  { type: "text", question: "What is your hobby?" },
  { type: "select", question: "What is your favorite food?", options: ["Pizza", "Sushi", "Burger", "Salad", "Other"] }
];

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const navigate = useNavigate();

  const handleAnswerChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/dashboard', { state: { answers } });
    }
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.type === "text") {
      return (
        <input
          type="text"
          className="w-full p-2 mb-4 border border-n-6 bg-n-9 text-n-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1"
          value={answers[currentQuestionIndex]}
          onChange={handleAnswerChange}
        />
      );
    } else if (currentQuestion.type === "select") {
      return (
        <select
          className="w-full p-2 mb-4 border border-n-6 bg-n-9 text-n-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1"
          value={answers[currentQuestionIndex]}
          onChange={handleAnswerChange}
        >
          <option value="" disabled>Select an option</option>
          {currentQuestion.options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-n-8 p-4">
      <div className="max-w-md w-full bg-n-7 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-color-1">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <p className="text-lg mb-4 text-n-2">{questions[currentQuestionIndex].question}</p>
        {renderQuestion()}
        <Button white onClick={handleNextQuestion}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Questions;
