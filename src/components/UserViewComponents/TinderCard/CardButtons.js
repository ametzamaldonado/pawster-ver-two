import React from 'react'

function CardButtons({ motionDirection, handleSwipeLeft, handleSwipeRight, outOfCards }) {
    console.log(outOfCards)
    return (
        <>
            <div className="card-buttons">
                <button className='no_buttonStyling' onClick={handleSwipeLeft} disabled={outOfCards}>
                    <i className="bi bi-x-lg swipe-icon" id={outOfCards ? 'mute-icon': 'swipe-left'}></i>
                </button>

                <button className='no_buttonStyling' onClick={handleSwipeRight} disabled={outOfCards}>
                    <i className="bi bi-heart-fill swipe-icon" id={outOfCards ? 'mute-icon' : 'swipe-right'}></i>
                </button>
            </div>
            <p className="center-items" hidden={outOfCards ? true : false}>
                Last swipe direction: {motionDirection}
            </p>
        </>
    )
}

export default CardButtons