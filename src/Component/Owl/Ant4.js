// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import './Ant4.css';

// const Ant4 = ({ image, onRotate, onDragEnd }) => {
//   const [rotation, setRotation] = useState(0);

//   const handleDrag = (event, info) => {
//     const newRotation = info.point.x / 10; // Adjust sensitivity if needed
//     setRotation(newRotation);
//     if (onRotate) onRotate(newRotation);
//   };

//   return (
//     <motion.img
//       src={image}
//       alt="ant-4"
//       className="ant4-image"
//       drag
//       dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
//       dragElastic={0.5}
//       onDrag={handleDrag}
//       onDragEnd={onDragEnd}
//       style={{ rotate: `${rotation}deg` }}
//     />
//   );
// };

// export default Ant4;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Ant.css';  // Reuse the same styles as other ants

const Ant4 = ({ image, onRotate, onDragEnd }) => {
  const [rotation, setRotation] = useState(0);

  const handleDrag = (event, info) => {
    const newRotation = info.point.x / 10;
    setRotation(newRotation);
    if (onRotate) {
      onRotate(4, newRotation);  // Assuming ID is 4
    }
  };

  const handleDragEnd = () => {
    if (onDragEnd) {
      onDragEnd(4);
    }
  };

  return (
    <div className="ant4-container">
      <motion.img
        src={image}
        alt="ant-4"
        className="ant-image"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.5}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ rotate: `${rotation}deg` }}
      />
      <p className="ant-text">Ant 4</p>
    </div>
  );
};

export default Ant4;

