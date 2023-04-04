import React, { useState } from "react";
import { useMotionValue, useAnimation } from "framer-motion";
import CardButtons from "./CardButtons";
import Card from './Card';
import './TinderContainer.css'
import { cards } from "../../data/data";

function TinderContainer() {
  const [motionDirection, setMotionDirection] = useState(null);
  // To move the card as the user drags the cursor
  const motionValue = useMotionValue(0);

  // Framer motion animation hook
  const animControls = useAnimation();
  // const animControls = useAnimation({
  //     transition: { duration: .3 },
  // });


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

      <CardButtons
        motionDirection={motionDirection}
        handleSwipeLeft={handleSwipeLeft}
        handleSwipeRight={handleSwipeRight}
      />

      <div className="card-hints">
        <i className="bi bi-arrow-left-square"></i><p>Nope</p>
        <p>Like </p> <i className="bi bi-arrow-right-square"></i>
      </div>
    </div>
  )
}

export default TinderContainer