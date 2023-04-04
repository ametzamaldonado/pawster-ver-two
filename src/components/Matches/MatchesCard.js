import React from 'react'

function MatchesCard({ userName, image }) {
    return (
        <>
            <div className='matches-img-container'>
                <img src={image} alt="Snow" className='matches-img'/>
                <div className="bottom-left chat_name">{userName}</div>
            </div>

        </>
    );
}

export default MatchesCard;