// https://www.geeksforgeeks.org/how-to-create-tinder-card-swipe-gesture-using-react-and-framer-motion/
import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";

// Some styling for the card
const style = {
  backgroundImage: "URL(https://img.icons8.com/color/452/GeeksforGeeks.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundColor: "#55ccff",
  backgroundPosition: 'center',
  boxShadow: "5px 10px 18px #888888",
  borderRadius: 10,
  height: 400,
  width: 250,
  margin: "0 auto", // Add this line to center the card horizontally
};

export default function TinderContainer() {
    const [motionDirection, setMotionDirection] = useState(null);
  // To move the card as the user drags the cursor
  const motionValue = useMotionValue(0);

  // To rotate the card as the card moves on drag
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);

  // To decrease opacity of the card when swiped
  // on dragging card to left(-200) or right(200)
  // opacity gradually changes to 0
  // and when the card is in center opacity = 1
  const opacityValue = useTransform(
    motionValue,
    [-200, -150, 0, 150, 200],
    [0, 1, 1, 1, 0]
  );

  // Framer motion animation hook
//   const animControls = useAnimation();
const animControls = useAnimation({
    transition: { duration: .3 },
  });

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) <= 1) { // if "left"
      animControls.start({ x: 0 });
    } else { // if "right"
      console.log(info.offset.x < 0 )
      setMotionDirection(info.offset.x < 0 ? "left" : "right");
      animControls.start({ x: info.offset.x < 0 ? -200 : 200 });
    }
  };

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

  console.log(motionDirection)

  return (
    <div className='temp'>
      <motion.div
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
        style={{
          ...style,
          x: motionValue,
          rotate: rotateValue,
          opacity: opacityValue,
        }}
        onDragEnd={handleDragEnd}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleSwipeLeft}>Swipe Left</button>
        <button onClick={handleSwipeRight}>Swipe Right</button>
      </div>
      <p style={{ textAlign: "center" }}>
        Last swipe direction: {motionDirection}
      </p>
    </div>
  );
};
