import React from 'react';
import noPets from "../../../img/noPets.png";
import './NoMessages.scss'

function NoMessages() {
  return (
    <div className='no-messages'>
        <div className="text">
            <h4>You have no messages</h4>
            <span className='grey-text'>Swipe on some pets and send them a message to let them know your interested!</span>
            <img src={noPets} alt="no mesages" />
        </div>
    </div>
  )
}

export default NoMessages