import React from "react";
import './PetInfoCard.scss'

function PetInfoCard({ card }) {
  const { images, name, age, species, gender, aboutMe, shelterID, location } = card
  console.log(shelterID,name)
  return (
    <div className='petInfo' > 
      {/* Images */}
      <div className="petImages-container">
        {images?.map((img, idx) => (
          <div className="petImg-div" key={idx}>
          <img src={img} alt={`${name}-${idx}`} />
          </div>
        ))}
      </div>

        
      {/* Name */}
        <span className="medium-font">{name}</span>
        
      {/* Small Details Div */}
      <div className="petInfo-details">
        <ul>
        <li><span>Age:</span> {age}</li>
          <li><span>Species:</span> {species}</li>
          <li><span>Gender:</span> {gender}</li>
          <li><span>Location:</span> {location}</li>
        </ul>
      </div>

      <div className='about-me'>
        <span>About Me: </span>
        {aboutMe}
      </div>
    </div>
  );
}

export default PetInfoCard;