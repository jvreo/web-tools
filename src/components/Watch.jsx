import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Return from "../assets/images/return.png"

function Watch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); 

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 10); 
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => setElapsedTime(0);
  
  return (
    <>
      <div className="container-watch">
        <div className="return-home">
          <Link to="/"><img src={Return} alt="return.png" /></Link>
        </div>   
        <div className="display-watch">
        {formatElapsedTime(elapsedTime)}
        </div>
        <div className="watch-buttons">
          <button disabled={(isRunning && elapsedTime !== 0) ? true : false } onClick={handleReset}  id="reset">Reset</button>
          <button onClick={isRunning ? handleStop : handleStart} id={isRunning ? "stop-start" : "start-stop"}>{isRunning ? "Stop" : "Start"}</button>
        </div>
      </div>
    </>
  );
}

function formatElapsedTime(milliseconds) {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(2);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}

export default Watch;
