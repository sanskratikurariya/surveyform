import React, { useState } from "react";
import SurveyForm from "./components/SurveyForm";
import WelcomeScreen from "./components/WelcomeScreen";
import "./styles.css"; // Import the custom CSS


function App() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <>

     <div className="app-container">
    
    {!isStarted ? <WelcomeScreen onStart={handleStart} /> : <SurveyForm />}
  </div></>
   
  );
}

export default App;
