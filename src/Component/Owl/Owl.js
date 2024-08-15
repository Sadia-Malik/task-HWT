import React, { useState } from 'react';
import AntContainer from './AntContainer';
import './Owl.css';

import backButtonImage from '../images/Vector (1).png';
import nextButtonImage from '../images/Vector (2).png';
import owl from '../images/Group (2).png';
import lefteye from '../images/left-eye.png';
import right from '../images/right-eye.png';

function Owl() {
  const [eyeRotation, setEyeRotation] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [containerKey, setContainerKey] = useState(0); // State to force re-render
  const [history, setHistory] = useState([]); // History to keep track of states
  const [isAntHidden, setIsAntHidden] = useState(false); // New state to hide/show ant

  const handleAntRotate = (rotation) => {
    setEyeRotation(rotation);
  };

  const resetEyeRotation = () => {
    setEyeRotation(0);
    setIsBouncing(false);
  };

  const handleAntInOwlEatArea = (isInside) => {
    setIsBouncing(isInside);
    setIsAntHidden(isInside); // Set ant visibility based on whether it's in the owl-eat area
  };

  const handleNextClick = () => {
    setHistory((prevHistory) => [...prevHistory, isNextClicked]); // Save current state to history
    setIsNextClicked(true);
    setContainerKey((prevKey) => prevKey + 1); // Increment key to force re-render
  };

  const handleBackClick = () => {
    setIsNextClicked(history.length > 0 ? history[history.length - 1] : false); // Revert to last state
    setHistory(history.slice(0, -1)); // Remove last state from history
    setIsBouncing(false); // Stop bouncing when going back
    setContainerKey((prevKey) => prevKey + 1); // Increment key to force re-render
    setIsAntHidden(false); // Ensure the ant is visible when going back
  };

  return (
    <div className="background-img">
      <AntContainer 
        key={containerKey} // Apply the key to force re-render
        onRotate={handleAntRotate} 
        onDragEnd={resetEyeRotation}
        onAntInOwlEatArea={handleAntInOwlEatArea}
        isNextClicked={isNextClicked} // Pass state to AntContainer
        isAntHidden={isAntHidden} // Pass ant visibility state to AntContainer
      />

      <div className={`owl-container position-r ${isNextClicked ? 'owl-next-position' : ''}`}>
        <div className={`owl-eat ${isNextClicked ? 'next-position' : 'original-position'}`}></div>
        <img 
          src={owl} 
          className={`img-w ${isBouncing ? 'bounce' : ''}`} 
          alt="owl" 
        />
        <div>
          <img
            src={lefteye}
            className={`position-ab-le ${isNextClicked ? 'position-ab-le-next' : ''}`}
            alt="left-eye"
            style={{ transform: `rotate(${eyeRotation}deg)` }}
          />
          <img
            src={right}
            className={`position-ab-ri ${isNextClicked ? 'position-ab-ri-next' : ''}`}
            alt="right-eye"
            style={{ transform: `rotate(${eyeRotation}deg)` }}
          />
        </div>
      </div>

      <button className="navigation-button back-button" onClick={handleBackClick}>
        <img src={nextButtonImage} alt="Back" />
        <span>Back</span>
      </button>
      <button className="navigation-button next-button" onClick={handleNextClick}>
        <img src={backButtonImage} alt="Next" />
        <span>Next</span>
      </button>
    </div>
  );
}

export default Owl;
