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
        dragElastic={1}
        onDrag={handleDrag}
        onDragEnd={onDragEnd}
        style={{ rotate: `${rotation}deg` }}
      />
      <p className={`ant-text ${isVisible && (!isInOwlEatArea || !hideInOwlEatArea || isNextClicked) ? '' : 'hidden'}`}>{name}</p>
    </div>
  );
};

export default Ant;
