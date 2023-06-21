import { useRegistrationContext } from "../../../../context/UserRegistrationContext";
import React from "react";
import Buttons from "./Buttons";

export default function Income() {
  const { userInputData, handleTextChange } = useRegistrationContext();
  return (
    <>
      {/* Annual Income */}
      <div className="side-by-side">
        <div className="input-wrapper">
          <label htmlFor="annualIncome">Annual Income: </label>
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
          <label htmlFor="rentMortage">Rent/Mortgage: </label>
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

      <Buttons />
    </>
  );
}
