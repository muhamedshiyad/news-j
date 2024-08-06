import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div className="date-time-display">
    <p className="mb-0 me-2">
      <i className="fas fa-calendar-alt me-1"></i> {formattedDate}
    </p>
    <p className="mb-0">
      <i className="fas fa-clock me-1"></i> {formattedTime}
    </p>
  </div>
  );
};

export default DateTimeDisplay;
