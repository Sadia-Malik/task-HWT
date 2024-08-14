// import React, { useEffect } from 'react';
// import Ant from './Ant';
// import './AntContainer.css';

// import ant1 from '../imges/ant.png';
// import ant2 from '../imges/Group.png';
// import ant3 from '../imges/Vector.png';
// import ant4 from '../imges/Group (1).png';

// const AntContainer = ({ onRotate, onDragEnd, onAntInOwlEatArea }) => {
//   const ants = [
//     { id: 1, image: ant1, name: 'Ant 1' },
//     { id: 2, image: ant2, name: 'Ant 2' },
//     { id: 3, image: ant3, name: 'Ant 3' },
//     { id: 4, image: ant4 } // Ant 4 without ant-box class
//   ];

//   useEffect(() => {
//     const handleMouseMove = () => {
//       const owlEatElement = document.querySelector('.owl-eat');
//       const owlEatRect = owlEatElement.getBoundingClientRect();

//       const ants = document.querySelectorAll('.ant');
//       let isAnyAntInside = false;

//       ants.forEach((ant) => {
//         const antRect = ant.getBoundingClientRect();
//         const isInside = 
//           antRect.left < owlEatRect.right &&
//           antRect.right > owlEatRect.left &&
//           antRect.top < owlEatRect.bottom &&
//           antRect.bottom > owlEatRect.top;

//         if (isInside) {
//           isAnyAntInside = true;
//         }
//       });

//       if (typeof onAntInOwlEatArea === 'function') {
//         onAntInOwlEatArea(isAnyAntInside); // Ensure this function is called
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [onAntInOwlEatArea]);

//   return (
//     <div className="ant-container">
//       {ants.map((ant) => (
//         <div
//           key={ant.id}
//           className={`ant ${ant.id === 4 ? 'ant4-container' : 'ant-box'}`}
//         >
//           <Ant
//             id={ant.id}
//             image={ant.image}
//             name={ant.name}
//             onRotate={onRotate}
//             onDragEnd={onDragEnd}
//             onAntInOwlEatArea={onAntInOwlEatArea} // Pass the function down to Ant
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AntContainer;


// import React from 'react';
// import Ant from './Ant';
// import './AntContainer.css';

// import ant1 from '../imges/ant.png';
// import ant2 from '../imges/Group.png';
// import ant3 from '../imges/Vector.png';
// import ant4 from '../imges/Group (1).png';

// const AntContainer = ({ onRotate, onDragEnd, onAntInOwlEatArea }) => {
//   const ants = [
//     { id: 1, image: ant1, name: 'Ant 1' },
//     { id: 2, image: ant2, name: 'Ant 2' },
//     { id: 3, image: ant3, name: 'Ant 3' },
//     { id: 4, image: ant4 } // Ant 4 without ant-box class
//   ];

//   return (
//     <div className="ant-container">
//       {ants.map((ant) => (
//         <div
//           key={ant.id}
//           className={`ant ${ant.id === 4 ? 'ant4-container' : 'ant-box'}`}
//         >
//           <Ant
//             id={ant.id}
//             image={ant.image}
//             name={ant.name}
//             onRotate={onRotate}
//             onDragEnd={onDragEnd}
//             onAntInOwlEatArea={onAntInOwlEatArea}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AntContainer;



// import React, { useState } from 'react';
// import Ant from './Ant';
// import './AntContainer.css';

// import ant1 from '../imges/ant.png';
// import ant2 from '../imges/Group.png';
// import ant3 from '../imges/Vector.png';
// import ant4 from '../imges/Group (1).png';

// const AntContainer = ({ onRotate, onDragEnd, onAntInOwlEatArea, isNextClicked }) => {
//   const [antsInOwlEatArea, setAntsInOwlEatArea] = useState({});

//   const ants = [
//     { id: 1, image: ant1, name: 'Ant 1' },
//     { id: 2, image: ant2, name: 'Ant 2' },
//     { id: 3, image: ant3, name: 'Ant 3' },
//     { id: 4, image: ant4 } // Ant 4 should always be visible
//   ];

//   const handleAntInOwlEatArea = (id, isInside) => {
//     setAntsInOwlEatArea(prev => ({
//       ...prev,
//       [id]: isInside
//     }));
//   };

//   return (
//     <div className="ant-container">
//       {ants.map((ant) => (
//         <div
//           key={ant.id}
//           className={`ant ${ant.id === 4 ? 'ant4-container' : 'ant-box'} ${ant.id === 4 && isNextClicked ? 'ant4-next-position' : ''}`}
//         >
//           <Ant
//             id={ant.id}
//             image={ant.image}
//             name={ant.name}
//             onRotate={onRotate}
//             onDragEnd={onDragEnd}
//             onAntInOwlEatArea={handleAntInOwlEatArea}
//             isVisible={!(antsInOwlEatArea[ant.id] && !isNextClicked)} // Hide ants in the owl-eat-area if not in next state
//             hideInOwlEatArea={isNextClicked} // Control visibility based on next button click
//             isNextClicked={isNextClicked}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AntContainer;


import React, { useState } from 'react';
import Ant from './Ant';
import './AntContainer.css';

import ant1 from '../imges/Beetle (2).png';
import ant2 from '../imges/OBJECTS.png';
import ant3 from '../imges/wasp.png';
import ant4 from '../imges/Group (1).png';

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
