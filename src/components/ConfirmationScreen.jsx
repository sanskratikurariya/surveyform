import React, { useEffect } from "react";

const ConfirmationScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload(); // Reloads the page after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="confirmation-screen">
      <h1 className="confirmation-title">Thank you for your feedback!</h1>
      <p className="confirmation-text">Redirecting to the welcome screen...</p>
    </div>
  );
};

export default ConfirmationScreen;
