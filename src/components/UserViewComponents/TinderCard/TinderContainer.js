import React, { useEffect, useState } from "react";
import { useMotionValue, useAnimation } from "framer-motion";
import CardButtons from "./CardButtons";
import Card from './Card';
import './TinderContainer.scss'
import NoTinderCards from "./NoTinderCards";

function TinderContainer({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [motionDirection, setMotionDirection] = useState(null);
  
  // To move the card as the user drags the cursor
  const motionValue = useMotionValue(0);

  // Framer motion animation hook
  const animControls = useAnimation();

  const handleSwipeLeft = () => {
    setMotionDirection("left");
    motionValue.set(-200);
    animControls.start({
      x: -200,
      transition: { 
          duration: 0.5,
          onComplete: () => {
              setCurrentIndex(currentIndex + 1);
              animControls.start({ x: 0 });
              resetValues();
          }
      }
  });
    // add to user's liked list;
    // addPetMatch(currentPetInfo.uid)
  };

  const handleSwipeRight = () => {
    setMotionDirection("right");
    motionValue.set(200);
    animControls.start({
      x: 200,
      transition: { 
          duration: 0.5,
          onComplete: () => {
              setCurrentIndex(currentIndex + 1);
              animControls.start({ x: 0 });
              resetValues();
          }
      }
  });
  };
 
  const resetValues = () => {
    motionValue.set(0);
    animControls.start({ x: 0 });
  }
 
  console.log(currentIndex)
  return (
    <div className='tinder-container'>
        { currentIndex < cards.length ? (
        <Card
          key={currentIndex}
          image={cards[currentIndex].image}
          color={cards[currentIndex].color}
          animControls={animControls}
          motionValue={motionValue}
          motionDirection={motionDirection}
          setMotionDirection={setMotionDirection}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          resetValues={resetValues}
        />
      ) :
      (
        <NoTinderCards />
      ) } 
    

      
      <CardButtons
        motionDirection={motionDirection}
        handleSwipeLeft={handleSwipeLeft}
        handleSwipeRight={handleSwipeRight}
        outOfCards={currentIndex >= cards.length}
      />

      <div className="card-hints">
        <i className="bi bi-arrow-left-square"></i><p>Nope</p>
        
        
        <p>Like </p> <i className="bi bi-arrow-right-square"></i>
      </div>

    </div>
  )
}

export default TinderContainer