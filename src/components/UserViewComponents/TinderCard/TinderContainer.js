import React, { useEffect, useState } from "react";
import { useMotionValue, useAnimation } from "framer-motion";
import CardButtons from "./CardButtons";
import Card from './Card';
import './TinderContainer.scss'
import NoTinderCards from "./NoTinderCards";
import BottomCardHints from "./BottomCardHints"
import PetInfoCard from "./PetInfoCard";

function TinderContainer({ petsData, addPetMatch }) {
  console.log(petsData)
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
  })
  };
 
  const resetValues = () => {
    motionValue.set(0);
    animControls.start({ x: 0 });
  }

  const handleCardsFlipped = () => {
    let target = document.querySelector(".tinder-card-inner");
    let frontCard = document.querySelector(".front-card");
    let backCard = document.querySelector(".back-card");
    target.classList.toggle("flip");
    frontCard.classList.toggle("none");
    backCard.classList.toggle("none");
    console.log(target)
};
 
  return (
    <div className='tinder-container' >
      <div className="tinder-card-inner" >

     
        { currentIndex < petsData.length ? (
          <>
          <div className="front-card">
            <Card
          key={currentIndex}
          image={petsData[currentIndex].images[0]}
          animControls={animControls}
          motionValue={motionValue}
          motionDirection={motionDirection}
          setMotionDirection={setMotionDirection}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          resetValues={resetValues}
        />
          </div>
           
          <div className="back-card none">
            <PetInfoCard 
              card={petsData[currentIndex]}
            />
          </div>
          </>
       
      ) :
      (
        <NoTinderCards />
      ) } 
    
    </div>
      
      <CardButtons
        motionDirection={motionDirection}
        handleSwipeLeft={handleSwipeLeft}
        handleSwipeRight={handleSwipeRight}
        outOfCards={currentIndex >= petsData.length}
        handleCardsFlipped={handleCardsFlipped}
      />

      <BottomCardHints />

    </div>
  )
}

export default TinderContainer