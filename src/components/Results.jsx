import React from "react";

const Results = ({ userName, userAnswers, questions, startOver }) => {
  const correctCount = questions.filter(
    (q, i) => q.correctAnswer === userAnswers[i]
  ).length;

  return (
    <div className="results-section">
      <h2>Results</h2>
      <p>
        {userName}, you got {correctCount} out of {questions.length} correct!
      </p>
      <ul>
        {questions.map((q, idx) => (
          <li key={idx}>
            <span dangerouslySetInnerHTML={{ __html: q.question }} />
            <br />
            Your Answer:{" "}
            <span
              style={{
                color:
                  q.correctAnswer === userAnswers[idx] ? "green" : "red",
              }}
              dangerouslySetInnerHTML={{ __html: userAnswers[idx] }}
            />
            <br />
            Correct Answer:{" "}
            <span dangerouslySetInnerHTML={{ __html: q.correctAnswer }} />
          </li>
        ))}
      </ul>
      <button onClick={startOver}>Start Over</button>
    </div>
  );
};

export default Results;
