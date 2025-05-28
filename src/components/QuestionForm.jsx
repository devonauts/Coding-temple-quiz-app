import React, { useEffect, useState } from "react";

const QuestionForm = ({
  userData,
  setQuestionData,
  setCurrentQuestionIndex,
  question,
  onSubmit,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    if (userData) {
      const fetchQuestions = async () => {
        setLoading(true);
        const url = `https://opentdb.com/api.php?amount=5&category=${userData.category}&difficulty=${userData.difficulty}&type=multiple`;
        try {
          const res = await fetch(url);
          const data = await res.json();
          const questions = data.results.map((q) => ({
            question: q.question,
            answers: [...q.incorrect_answers, q.correct_answer].sort(
              () => Math.random() - 0.5
            ),
            correctAnswer: q.correct_answer,
          }));
          setQuestionData(questions);
          setCurrentQuestionIndex(0);
        } catch {
          setError("Failed to load questions. Please try again.");
        } finally {
          setLoading(false);
        }
      };
      fetchQuestions();
    }
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) {
      setError("Please select an answer.");
      return;
    }
    setError("");
    onSubmit(selectedAnswer);
    setSelectedAnswer("");
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!question) return null;

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <h3 dangerouslySetInnerHTML={{ __html: question.question }}></h3>
      {question.answers.map((ans, idx) => (
        <div key={idx}>
          <label>
            <input
              type="radio"
              name="answer"
              value={ans}
              checked={selectedAnswer === ans}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            <span dangerouslySetInnerHTML={{ __html: ans }} />
          </label>
        </div>
      ))}
      {error && <p className="error">{error}</p>}
      <button type="submit">Submit Answer</button>
    </form>
  );
};

export default QuestionForm;
