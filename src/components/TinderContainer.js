import React, { useState } from "react";
import Card from './Card';
import './TinderContainer.css'

import { useMotionValue, useAnimation } from "framer-motion";

function TinderContainer() {
  const [motionDirection, setMotionDirection] = useState(null);
  // To move the card as the user drags the cursor
  const motionValue = useMotionValue(0);

  // Framer motion animation hook
  const animControls = useAnimation();
  // const animControls = useAnimation({
  //     transition: { duration: .3 },
  // });

  const cards = [
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#55ccff'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#e8e8e8'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#0a043c'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: 'black'
    }
  ];

  const handleSwipeLeft = () => {
    setMotionDirection("left");
    motionValue.set(-200);
    animControls.start({ x: -200 });
  };

  const handleSwipeRight = () => {
    setMotionDirection("right");
    motionValue.set(200);
    animControls.start({ x: 200 });
  };

  return (
    <div className='tinder-container'>
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          color={card.color}
          animControls={animControls}
          motionValue={motionValue}
          motionDirection={motionDirection}
          setMotionDirection={setMotionDirection}
        />
      ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleSwipeLeft}>Swipe Left</button>
        <button onClick={handleSwipeRight}>Swipe Right</button>
      </div>
      <p style={{ textAlign: "center" }}>
        Last swipe direction: {motionDirection}
      </p>
    </div>
  )
}

export default TinderContainer