import { useRegistrationContext } from "../../../../context/UserRegistrationContext";
import React from "react";
import Buttons from "./Buttons";

export default function PersonalInfo() {
    const { userInputData, handleTextChange } = useRegistrationContext();

  return (
    <>
    <div className="side-by-side">
      <div className="input-wrapper">
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={userInputData.firstName}
          onChange={handleTextChange}
          required
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={userInputData.lastName}
          onChange={handleTextChange}
          required
        />
      </div>
    </div>
    {/* Date of Birth */}
    <div className="input-wrapper">
      <label htmlFor="age">Age:</label>
      <input
        id="age"
        name="age"
        type="number"
        value={userInputData.age}
        onChange={handleTextChange}
        required
      />
    </div>

    {/* Phone Number */}
    <div className="input-wrapper">
      <label htmlFor="phone_number">Phone Number:</label>
      <input
        type="tel"
        id="phone_number"
        name="phone_number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="123-456-7980"
        value={userInputData.phone_number}
        onChange={handleTextChange}
        required
      />
    </div>
    <Buttons/>
  </>
  )
}
