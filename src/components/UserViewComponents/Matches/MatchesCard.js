import React from 'react';
import "./MatchesCard.scss"

function MatchesCard({ userName, image }) {
    return (
        <>
            <div className='matches-img-container' onClick={() => console.log('here at match div')}>
                <img src={image} alt="Snow" className='matches-img'/>
                <div className="bottom-left chat_name">{userName}</div>
            </div>

        </>
    );
}

export default MatchesCard;