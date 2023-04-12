import React from 'react';
import "./BottomCardHints.scss"

function BottomCardHints() {
  return (
    <div className="card-hints">
        <i className="bi bi-arrow-left-square"></i><p>Nope</p>
        
        <div className="hint-border">
            <p><i class="bi bi-info-circle"></i> For pet info </p>
        </div>
        
        <p>Like </p> <i className="bi bi-arrow-right-square"></i>
      </div>
  )
}

export default BottomCardHints