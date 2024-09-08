
// import React, { useState, useEffect } from "react";
// import SurveyQuestion from "./SurveyQuestion";
// import ConfirmationScreen from "./ConfirmationScreen";

// const SurveyForm = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [isConfirmed, setIsConfirmed] = useState(false);
//   const [isNextEnabled, setIsNextEnabled] = useState(false);

//   const questions = [
//     { id: 1, question: "How satisfied are you with our products?", type: "rating", scale: 5 },
//      { id: 2, question: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
//     { id: 3, question: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
//     { id: 4, question: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
//     { id: 5, question: "What could we do to improve our service?", type: "text" },
//   ];

//   useEffect(() => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const currentAnswer = answers[currentQuestion.id];

//     if (currentQuestion.type === "rating" && currentAnswer) {
//       setIsNextEnabled(true);
//     } else if (currentQuestion.type === "text" && currentAnswer?.trim()) {
//       setIsNextEnabled(true);
//     } else {
//       setIsNextEnabled(false);
//     }
//   }, [currentQuestionIndex, answers]);

//   const handleAnswerChange = (questionId, answer) => {
//     setAnswers({ ...answers, [questionId]: answer });
//   };

//   const handleNext = () => {
//     if (isNextEnabled) {
//       setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
//     }
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleConfirm = () => {
//     if (isNextEnabled) {
//       setIsConfirmed(true);
//       console.log(answers); // Here you can store answers in local storage or send to backend
//     }
//   };

//   if (isConfirmed) {
//     return <ConfirmationScreen />;
//   }

//   return (
//     <div className="survey-form">
//       <SurveyQuestion
//         question={questions[currentQuestionIndex]}
//         onAnswerChange={handleAnswerChange}
//         answer={answers[questions[currentQuestionIndex].id]}
//       />
//       <div className="navigation-buttons">
//         <button
//           className="nav-button"
//           onClick={handlePrevious}
//           disabled={currentQuestionIndex === 0}
//         >
//           Previous
//         </button>
//         {currentQuestionIndex < questions.length - 1 ? (
//           <button
//             className="nav-button"
//             onClick={handleNext}
//             disabled={!isNextEnabled} // Next button only enabled when valid input is provided
//           >
//             Next
//           </button>
//         ) : (
//           <button
//             className="submit-button"
//             onClick={handleConfirm}
//             disabled={!isNextEnabled} // Submit button only enabled when valid input is provided
//           >
//             Submit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SurveyForm;

// import React, { useState, useEffect } from "react";
// import SurveyQuestion from "./SurveyQuestion";
// import ConfirmationScreen from "./ConfirmationScreen";

// const SurveyForm = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [isConfirmed, setIsConfirmed] = useState(false);
//   const [isNextEnabled, setIsNextEnabled] = useState(false);

//   const questions = [
//     { id: 1, question: "How satisfied are you with our products?", type: "rating", scale: 5 },
//     { id: 2, question: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
//     { id: 3, question: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
//     { id: 4, question: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
//     { id: 5, question: "What could we do to improve our service?", type: "text" },
//   ];

//   useEffect(() => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const currentAnswer = answers[currentQuestion.id];

//     if (currentQuestion.type === "rating" && currentAnswer) {
//       setIsNextEnabled(true);
//     } else if (currentQuestion.type === "text" && currentAnswer?.trim()) {
//       setIsNextEnabled(true);
//     } else {
//       setIsNextEnabled(false);
//     }
//   }, [currentQuestionIndex, answers]);

//   const handleAnswerChange = (questionId, answer) => {
//     setAnswers({ ...answers, [questionId]: answer });
//     saveAnswerToLocalStorage(questionId, answer);
//   };

//   const saveAnswerToLocalStorage = (questionId, answer) => {
//     const savedFeedback = JSON.parse(localStorage.getItem("surveyFeedback")) || [];
//     savedFeedback.push({ questionId, answer });
//     localStorage.setItem("surveyFeedback", JSON.stringify(savedFeedback));
//   };

//   const handleNext = () => {
//     if (isNextEnabled) {
//       setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
//     }
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleConfirm = () => {
//     if (isNextEnabled) {
//       setIsConfirmed(true);
//       console.log(answers); // Here you can store answers in local storage or send to backend
//     }
//   };

//   const handleResetSurvey = () => {
//     // Reset the survey

//     setCurrentQuestionIndex(0);
//     setIsConfirmed(false);

//     // Store the previous feedback in local storage line by line
//     const savedFeedback = JSON.parse(localStorage.getItem("surveyFeedback")) || [];
//     savedFeedback.push({ answers });
//     localStorage.setItem("surveyFeedback", JSON.stringify(savedFeedback));
//   };

//   if (isConfirmed) {
//     return <ConfirmationScreen />;
//   }

//   return (
//     <div className="survey-form">
//       <SurveyQuestion
//         question={questions[currentQuestionIndex]}
//         onAnswerChange={handleAnswerChange}
//         answer={answers[questions[currentQuestionIndex].id]}
//       />
//       <div className="navigation-buttons">
//         <button
//           className="nav-button"
//           onClick={handlePrevious}
//           disabled={currentQuestionIndex === 0}
//         >
//           Previous
//         </button>
//         {currentQuestionIndex < questions.length - 1 ? (
//           <button
//             className="nav-button"
//             onClick={handleNext}
//             disabled={!isNextEnabled} // Next button only enabled when valid input is provided
//           >
//             Next
//           </button>
//         ) : (
//           <button
//             className="submit-button"
//             onClick={handleConfirm}
//             disabled={!isNextEnabled} // Submit button only enabled when valid input is provided
//           >
//             Submit
//           </button>
//         )}
       
//       </div>
//     </div>
//   );
// };

// export default SurveyForm;




import React, { useState, useEffect } from "react";
import SurveyQuestion from "./SurveyQuestion";
import ConfirmationScreen from "./ConfirmationScreen";

const SurveyForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  const questions = [
    { id: 1, question: "How satisfied are you with our products?", type: "rating", scale: 5 },
    { id: 2, question: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
    { id: 3, question: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
    { id: 4, question: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
    { id: 5, question: "What could we do to improve our service?", type: "text" },
  ];

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = answers[currentQuestion.id];

    if (currentQuestion.type === "rating" && currentAnswer) {
      setIsNextEnabled(true);
    } else if (currentQuestion.type === "text" && currentAnswer?.trim()) {
      setIsNextEnabled(true);
    } else {
      setIsNextEnabled(false);
    }
  }, [currentQuestionIndex, answers]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    if (isNextEnabled) {
      setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleConfirm = () => {
    if (isNextEnabled) {
      saveSurveyToLocalStorage();
      setIsConfirmed(true);
      console.log(answers); // Here you can store answers in local storage or send to backend
    }
  };

  const saveSurveyToLocalStorage = () => {
    const savedFeedback = JSON.parse(localStorage.getItem("surveyFeedback")) || [];
    // Store the entire survey answers as one entry in the array
    savedFeedback.push(answers);
    localStorage.setItem("surveyFeedback", JSON.stringify(savedFeedback));
  };

  const handleResetSurvey = () => {
    // Reset the survey
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsConfirmed(false);

    // Save the previous survey feedback
    saveSurveyToLocalStorage();
  };

  if (isConfirmed) {
    return <ConfirmationScreen />;
  }

  return (
    <div className="survey-form">
      <SurveyQuestion
        question={questions[currentQuestionIndex]}
        onAnswerChange={handleAnswerChange}
        answer={answers[questions[currentQuestionIndex].id]}
      />
      <div className="navigation-buttons">
        <button
          className="nav-button"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            className="nav-button"
            onClick={handleNext}
            disabled={!isNextEnabled} // Next button only enabled when valid input is provided
          >
            Next
          </button>
        ) : (
          <button
            className="submit-button"
            onClick={handleConfirm}
            disabled={!isNextEnabled} // Submit button only enabled when valid input is provided
          >
            Submit
          </button>
        )}
       
      </div>
    </div>
  );
};

export default SurveyForm;
