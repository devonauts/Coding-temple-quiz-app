import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./components/Homepage";
import QuestionForm from "./components/QuestionForm";
import Results from "./components/Results";
import "./styles.css"

const App = () => {
  const [userData, setUserData] = useState(null);
  const [questionData, setQuestionData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const startOver = () => {
    setUserData(null);
    setQuestionData([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  const handleNext = (answer) => {
    const updatedAnswers = [...userAnswers, answer];
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex + 1 < questionData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="app-container">
      <h1>Mini Quiz App</h1>
      <AnimatePresence>
        {!userData && (
          <motion.div
            key="home"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <HomePage onSubmit={setUserData} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {userData && questionData.length === 0 && (
          <motion.div
            key="fetch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <QuestionForm
              userData={userData}
              setQuestionData={setQuestionData}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {questionData.length > 0 && !showResults && (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <QuestionForm
              question={questionData[currentQuestionIndex]}
              onSubmit={handleNext}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResults && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <Results
              userName={userData.name}
              userAnswers={userAnswers}
              questions={questionData}
              startOver={startOver}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
