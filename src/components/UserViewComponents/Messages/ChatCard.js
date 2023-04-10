import React from 'react';
import "./ChatCard.scss"

export default function ChatCard({ index, userName, image, message }) {
  return (
    <>
      <div className="chat" >
        <img className="round_styling chat_image" alt={`${userName}-img`} src={image} />
  
        <div className="chat_details">
          <p className='chat_name'>{userName}</p>
          <p className='chat_lastMsg'>{message}</p> {/* Should actually display the last message */}
        </div>
      </div>

    </>
  )
}

