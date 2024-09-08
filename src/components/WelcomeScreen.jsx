import React from "react";

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1 className="welcome-title">Welcome to Our Survey!</h1>
      <p className="welcome-text">We value your feedback. Please take a moment to answer our questions.</p>
      <button className="start-button" onClick={onStart}>
        Start Survey
      </button>
    </div>
  );
};

export default WelcomeScreen;
