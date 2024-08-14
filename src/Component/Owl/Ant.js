// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import './Ant.css';

// const Ant = ({ id, image, name, onRotate, onDragEnd, onAntInOwlEatArea }) => {
//   const [rotation, setRotation] = useState(0);

//   const handleDrag = (event, info) => {
//     const newRotation = Math.atan2(info.point.y - window.innerHeight / 2, info.point.x - window.innerWidth / 2) * (180 / Math.PI);
//     setRotation(newRotation);
//     onRotate(newRotation);

//     const owlEatElement = document.querySelector('.owl-eat');
//     const owlEatRect = owlEatElement.getBoundingClientRect();
//     const antRect = event.target.getBoundingClientRect();

//     // Check if the ant is exactly within the .owl-eat area
//     const isInArea = (
//       antRect.left >= owlEatRect.left &&
//       antRect.right <= owlEatRect.right &&
//       antRect.top >= owlEatRect.top &&
//       antRect.bottom <= owlEatRect.bottom
//     );

//     if (typeof onAntInOwlEatArea === 'function') {
//       onAntInOwlEatArea(isInArea);
//     }
//   };

//   return (
//     <div>
//       <motion.img
//         src={image}
//         alt={`ant-${id}`}
//         className="ant-image"
//         drag
//         dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
//         dragElastic={0.5}
//         onDrag={handleDrag}
//         onDragEnd={onDragEnd}
//         style={{ rotate: `${rotation}deg` }}
//       />
//       <p className="ant-text">{name}</p>
//     </div>
//   );
// };

// export default Ant;


// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import './Ant.css';

// const Ant = ({ id, image, name, onRotate, onDragEnd, onAntInOwlEatArea }) => {
//   const [rotation, setRotation] = useState(0);
//   const [isInOwlEatArea, setIsInOwlEatArea] = useState(false);
//   const antRef = useRef(null);

//   const handleDrag = (event, info) => {
//     const newRotation = Math.atan2(info.point.y - window.innerHeight / 2, info.point.x - window.innerWidth / 2) * (180 / Math.PI);
//     setRotation(newRotation);
//     onRotate(newRotation);

//     const owlEatElement = document.querySelector('.owl-eat');
//     const owlEatRect = owlEatElement.getBoundingClientRect();
//     const antRect = antRef.current.getBoundingClientRect();

//     // Check if the ant is exactly within the .owl-eat area
//     const isInArea = (
//       antRect.left >= owlEatRect.left &&
//       antRect.right <= owlEatRect.right &&
//       antRect.top >= owlEatRect.top &&
//       antRect.bottom <= owlEatRect.bottom
//     );

//     setIsInOwlEatArea(isInArea);
//     if (typeof onAntInOwlEatArea === 'function') {
//       onAntInOwlEatArea(isInArea);
//     }
//   };

//   return (
//     <motion.div
//       ref={antRef}
//       className={`ant ${isInOwlEatArea ? 'ant-in-owl-eat text-in-owl-eat' : ''}`}
//     >
//       <motion.img
//         src={image}
//         alt={`ant-${id}`}
//         className="ant-image"
//         drag
//         dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
//         dragElastic={0.5}
//         onDrag={handleDrag}
//         onDragEnd={onDragEnd}
//         style={{
//           rotate: `${rotation}deg`,
//           opacity: isInOwlEatArea ? 0 : 1,  // Hide the ant image when it's in the owl-eat area
//         }}
//       />
//       <p
//         className={`ant-text ${isInOwlEatArea ? 'text-in-owl-eat' : ''}`}
//         style={{
//           opacity: isInOwlEatArea ? 0 : 1,  // Hide the ant text when it's in the owl-eat area
//         }}
//       >
//         {name}
//       </p>
//     </motion.div>
//   );
// };

// export default Ant;



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import './Ant.css';

// const Ant = ({ id, image, name, onRotate, onDragEnd, onAntInOwlEatArea, isVisible, hideInOwlEatArea, isNextClicked }) => {
//   const [rotation, setRotation] = useState(0);
//   const [isInOwlEatArea, setIsInOwlEatArea] = useState(false);

//   const handleDrag = (event, info) => {
//     const newRotation = Math.atan2(info.point.y - window.innerHeight / 2, info.point.x - window.innerWidth / 2) * (180 / Math.PI);
//     setRotation(newRotation);
//     onRotate(newRotation);

//     const owlEatElement = document.querySelector('.owl-eat');
//     const owlEatRect = owlEatElement.getBoundingClientRect();
//     const antRect = event.target.getBoundingClientRect();

//     const isInArea = (
//       antRect.left >= owlEatRect.left &&
//       antRect.right <= owlEatRect.right &&
//       antRect.top >= owlEatRect.top &&
//       antRect.bottom <= owlEatRect.bottom
//     );

//     setIsInOwlEatArea(isInArea);
//     if (typeof onAntInOwlEatArea === 'function') {
//       onAntInOwlEatArea(id, isInArea);
//     }
//   };

//   return (
//     <div className={`ant ${isInOwlEatArea ? 'ant-in-owl-eat' : ''}`}>
//       <motion.img
//         src={image}
//         alt={`ant-${id}`}
//         className={`ant-image ${isVisible && (!isInOwlEatArea || !hideInOwlEatArea || isNextClicked) ? '' : 'hidden'}`}
//         drag
//         dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
//         dragElastic={0.9}
//         onDrag={handleDrag}
//         onDragEnd={onDragEnd}
//         style={{ rotate: `${rotation}deg` }}
//       />
//       <p className={`ant-text ${isVisible && (!isInOwlEatArea || !hideInOwlEatArea || isNextClicked) ? '' : 'hidden'}`}>{name}</p>
//     </div>
//   );
// };

// export default Ant;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import './Ant.css';

// const Ant = ({ id, image, name, onRotate, onDragEnd, onAntInOwlEatArea, isVisible, hideInOwlEatArea, isNextClicked }) => {
//   const [rotation, setRotation] = useState(0);
//   const [isInOwlEatArea, setIsInOwlEatArea] = useState(false);

//   const handleDrag = (event, info) => {
//     const newRotation = Math.atan2(info.point.y - window.innerHeight / 2, info.point.x - window.innerWidth / 2) * (180 / Math.PI);
//     setRotation(newRotation);
//     onRotate(newRotation);

//     const owlEatElement = document.querySelector('.owl-eat');
//     const owlEatRect = owlEatElement.getBoundingClientRect();
//     const antRect = event.target.getBoundingClientRect();

//     const isInArea = (
//       antRect.left >= owlEatRect.left &&
//       antRect.right <= owlEatRect.right &&
//       antRect.top >= owlEatRect.top &&
//       antRect.bottom <= owlEatRect.bottom
//     );

//     if (isInArea !== isInOwlEatArea) {
//       setIsInOwlEatArea(isInArea);
//       onAntInOwlEatArea(id, isInArea);
//     }
//   };

//   return (
//     <div className={`ant ${isInOwlEatArea ? 'ant-in-owl-eat' : ''}`}>
//       <motion.img
//         src={image}
//         alt={`ant-${id}`}
//         className={`ant-image ${isVisible && (!isInOwlEatArea || !hideInOwlEatArea || isNextClicked) ? '' : 'hidden'}`}
//         drag
//         dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
//         dragElastic={0.9}
//         onDrag={handleDrag}
//         onDragEnd={onDragEnd}
//         style={{ rotate: `${rotation}deg` }}
//       />
//       <p className={`ant-text ${isVisible && (!isInOwlEatArea || !hideInOwlEatArea || isNextClicked) ? '' : 'hidden'}`}>{name}</p>
//     </div>
//   );
// };

// export default Ant;



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Ant.css';

const Ant = ({ id, image, name, onRotate, onDragEnd, onAntInOwlEatArea, isVisible, hideInOwlEatArea, isNextClicked }) => {
  const [rotation, setRotation] = useState(0);
  const [isInOwlEatArea, setIsInOwlEatArea] = useState(false);

  const handleDrag = (event, info) => {
    const newRotation = Math.atan2(info.point.y - window.innerHeight / 2, info.point.x - window.innerWidth / 2) * (180 / Math.PI);
    setRotation(newRotation);
    onRotate(newRotation);

    const owlEatElement = document.querySelector('.owl-eat');
    const owlEatRect = owlEatElement.getBoundingClientRect();
    const antRect = event.target.getBoundingClientRect();

    const isInArea = (
      antRect.left >= owlEatRect.left &&
      antRect.right <= owlEatRect.right &&
      antRect.top >= owlEatRect.top &&
      antRect.bottom <= owlEatRect.bottom
    );

    if (isInArea !== isInOwlEatArea) {
      setIsInOwlEatArea(isInArea);
      onAntInOwlEatArea(id, isInArea);
    }
  };

  return (
    <div className={`ant ${isInOwlEatArea ? 'ant-in-owl-eat' : ''}`}>
      <motion.img
        src={image}
        alt={`ant-${id}`}
        className={`ant-image ${isVisible && (!isInOwlEatArea || !hideInOwlEatArea || isNextClicked) ? '' : 'hidden'}`}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.9}
        onDrag={handleDrag}
        onDragEnd={onDragEnd}
        style={{ rotate: `${rotation}deg` }}
      />
      <p className={`ant-text ${isVisible && (!isInOwlEatArea || !hideInOwlEatArea || isNextClicked) ? '' : 'hidden'}`}>{name}</p>
    </div>
  );
};

export default Ant;
