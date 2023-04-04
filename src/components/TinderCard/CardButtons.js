import React from 'react'

function CardButtons({ motionDirection, handleSwipeLeft, handleSwipeRight }) {
    return (
        <>
            <div className="card-buttons">
                <button className='no_buttonStyling' onClick={handleSwipeLeft}>
                    <i className="bi bi-x-lg swipe-left"></i>
                </button>

                <button className='no_buttonStyling' onClick={handleSwipeRight}>
                    <i className="bi bi-heart-fill swipe-right"></i>
                </button>
            </div>
            <p className="center-items">
                Last swipe direction: {motionDirection}
            </p>
        </>
    )
}

export default CardButtons