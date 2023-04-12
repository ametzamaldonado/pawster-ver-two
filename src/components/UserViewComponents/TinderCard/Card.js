// Inspo: https://www.geeksforgeeks.org/how-to-create-tinder-card-swipe-gesture-using-react-and-framer-motion/
import React from "react";
import { motion, useTransform } from "framer-motion";

export default function Card({ 
    image, 
    data,
    motionValue, 
    animControls, 
    motionDirection, 
    setMotionDirection, 
    currentIndex, 
    setCurrentIndex,
    resetValues,
    addPetMatch 
}) {

    console.log(data, data.uid)

    // Some styling for the card
    const style = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        boxShadow: "5px 10px 18px #888888",
        borderRadius: 10,
        height: 500,
        width: 300,
        margin: "0 auto", // Add this line to center the card horizontally
    };

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

    

    const handleDragEnd = (event, info) => {
        if (Math.abs(info.offset.x) <= 1) { // if "left"
            animControls.start({ x: 0 });
        } else { // if "right"
            console.log(info.offset.x < 0);
            addPetMatch(data.uid, data) ;
            setMotionDirection(info.offset.x < 0 ? "left" : "right");
            animControls.start({
                x: info.offset.x < 0 ? -200 : 200,
                transition: { 
                    duration: 0.5,
                    onComplete: () => {
                        animControls.start({ x: 0 });
                        setCurrentIndex(currentIndex + 1);
                        resetValues();
                    }
                }
            });
        }  
    };

    console.log(motionDirection, currentIndex)


    return (
        <div className="card-component" >
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
                animate={animControls}
            />
        </div>
    );
};
