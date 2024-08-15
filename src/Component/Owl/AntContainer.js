import React, { useState } from 'react';
import Ant from './Ant';
import './AntContainer.css';

import ant1 from '../images/Beetle (2).png';
import ant2 from '../images/OBJECTS.png';
import ant3 from '../images/wasp.png';
import ant4 from '../images/Group (1).png';

const AntContainer = ({ onRotate, onDragEnd, onAntInOwlEatArea, isNextClicked }) => {
  const [antsInOwlEatArea, setAntsInOwlEatArea] = useState({});

  const ants = [
    { id: 1, image: ant1, name: 'Beetle' },
    { id: 2, image: ant2, name: 'Ant' },
    { id: 3, image: ant3, name: 'wasp' },
    { id: 4, image: ant4 } // Ant 4 should always be visible
  ];

  const handleAntInOwlEatArea = (id, isInside) => {
    setAntsInOwlEatArea(prev => ({
      ...prev,
      [id]: isInside
    }));
    if (onAntInOwlEatArea) {
      onAntInOwlEatArea(isInside); // Notify the Owl component if any ant is in the owl-eat area
    }
  };

  return (
    <div className="ant-container">
      {ants.map((ant) => (
        <div
          key={ant.id}
          className={`ant ${ant.id === 4 ? 'ant4-container' : 'ant-box'} ${ant.id === 4 && isNextClicked ? 'ant4-next-position' : ''}`}
        >
          <Ant
            id={ant.id}
            image={ant.image}
            name={ant.name}
            onRotate={onRotate}
            onDragEnd={onDragEnd}
            onAntInOwlEatArea={handleAntInOwlEatArea}
            isVisible={!(antsInOwlEatArea[ant.id] && !isNextClicked)} // Hide ants in the owl-eat-area if not in next state
            hideInOwlEatArea={isNextClicked} // Control visibility based on next button click
            isNextClicked={isNextClicked}
          />
        </div>
      ))}
    </div>
  );
};

export default AntContainer;
