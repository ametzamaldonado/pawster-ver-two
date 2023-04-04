import React from 'react';
import MatchesCard from './MatchesCard';
import { matches } from "../../data/data"
import './MatchesContainer.css'

function MatchesContainer() {
    return (
        <div className='matches-container center-items '>
            {
                matches.map(person => (
                    <MatchesCard userName={person.userName} image={person.image} />
                ))
            }
        </div>
    )
}

export default MatchesContainer