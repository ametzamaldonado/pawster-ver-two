import React, { useState, useEffect } from "react";
import MatchesCard from "./MatchesCard";
import "./MatchesContainer.scss";
import NoMatches from "./NoMatches";

function MatchesContainer({ userPetMatches }) {
  const [noMatches, setNoMatches] = useState(true);

  useEffect(() => {
    if(userPetMatches && userPetMatches.length > 0){
      setNoMatches(false);
    }
  }, [userPetMatches]);

  return (
    <div className="matches-container">
      {noMatches && <NoMatches />}
      {userPetMatches?.map((el, index) => (
        <MatchesCard key={index} userName={el.name} image={el.images[0]} />
      ))}

    </div>
  );
}

export default MatchesContainer;
