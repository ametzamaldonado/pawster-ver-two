import React from "react";

function IncomeInfo({ userInputData, handleTextChange }) {
  return (
    <div className="incomeInfo-form form-containers">

      {/* Residence Type */}
      <div className="input-wrapper">
          <label for="residenceType">Residence Type: </label>
          <select 
          name="residenceType"
          id="residenceType" 
          value={userInputData.residenceType}
          onChange={handleTextChange} 
          required>
            <option value="">--Please choose an option--</option>
            <option value="House">House</option>
            <option value="Townhome">Townhome</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
          </select>
        </div>

      {/* Annual Income */}
      <div className="side-by-side">
        <div className="input-wrapper">
          <label for="annualIncome">Annual Income: </label>
          <input
            id="annualIncome"
            name="annualIncome"
            type="number"
            value={userInputData.annualIncome}
            onChange={handleTextChange} 
            required
          />
        </div>

      {/* Rent / Mortgage */}
        <div className="input-wrapper">
          <label for="rentMortage">Rent/Mortgage: </label>
          <input
            id="rentMortage"
            name="rentMortage"
            type="number"
            value={userInputData.rentMortage}
            onChange={handleTextChange} 
            required
          />
        </div>
      </div>

      {/* HouseHold Size */}
      <div className="side-by-side">

      <div className="input-wrapper">
          <label for="householdSize">House Hold Size: </label>
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
          <label for="numberOfPrevPets">Pets in the House: </label>
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
       
      

    
<span id="input-hint-files">All parts of the form are required in order for your profile to be considered complete. Please take the time to add the below information. </span>            

    </div>
  );
}

export default IncomeInfo;
