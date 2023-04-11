import React from 'react'
import noMatches from "../../../img/no-Tinder-matches.png"

function NoMatches() {
  return (
    <div className='no-matches'>
        <div className="text">
            <h4>You have no matches yet</h4>
            <span className='grey-text'>Swipe more pets to get more matches!</span>
            <img src={noMatches} alt="no matches"/>
        </div>
    </div>
  )
}

export default NoMatches