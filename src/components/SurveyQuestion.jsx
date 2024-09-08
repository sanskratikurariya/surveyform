import React from "react";

const SurveyQuestion = ({ question, onAnswerChange, answer }) => {
  const handleInputChange = (e) => {
    onAnswerChange(question.id, e.target.value);
  };

  return (
    <div className="survey-question">
      <h2 className="question-text">{question.question}</h2>
      {question.type === "rating" ? (
        <div className="rating-options">
          {Array.from({ length: question.scale }, (_, i) => (
            <button
              key={i + 1}
              className={`rating-button ${answer === (i + 1).toString() ? "selected" : ""}`}
              onClick={() => onAnswerChange(question.id, (i + 1).toString())}
            >
              {i + 1}
            </button>
          ))}
        </div>
      ) : (
        
        <textarea
          className="feedback-text"
          value={answer || ""}
          onChange={handleInputChange}
          placeholder="Write your feedback here..."
        />
      )}
    </div>
  );
};

export default SurveyQuestion;



