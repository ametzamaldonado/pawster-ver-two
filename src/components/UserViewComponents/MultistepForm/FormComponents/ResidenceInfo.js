import { useRegistrationContext } from "../../../../context/UserRegistrationContext";
import React from "react";
import Buttons from "./Buttons";

export default function ResidenceInfo() {
  const { userInputData, handleTextChange } = useRegistrationContext();

  return (
    <>
      {/* Residence Type */}
      <div className="input-wrapper">
        <label htmlFor="residenceType">Residence Type: </label>
        <select
          name="residenceType"
          id="residenceType"
          value={userInputData.residenceType}
          onChange={handleTextChange}
          required
        >
          <option value="">--Please choose an option--</option>
          <option value="House">House</option>
          <option value="Townhome">Townhome</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
        </select>
      </div>

      <div className="side-by-side">
            <div className="input-wrapper">
              <label htmlFor="householdSize">House Hold Size: </label>
              <input
                id="householdSize"
                name="householdSize"
                type="number"
                min="1"
                max="20"
                value={userInputData.householdSize}
                onChange={handleTextChange}
                required
              />
            </div>

            {/* Pets in the house */}
            <div className="input-wrapper">
              <label htmlFor="numberOfPrevPets">Pets in the House: </label>
              <input
                id="numberOfPrevPets"
                name="numberOfPrevPets"
                type="number"
                min="0"
                max="20"
                value={userInputData.numberOfPrevPets}
                onChange={handleTextChange}
                required
              />
            </div>
          </div>

      <Buttons />
    </>
  );
}
