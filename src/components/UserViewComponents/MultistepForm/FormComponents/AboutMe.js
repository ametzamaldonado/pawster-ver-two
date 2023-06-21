import { useRegistrationContext } from "../../../../context/UserRegistrationContext";
import React from "react";
import Buttons from "./Buttons";

export default function AboutMe() {
  const { userInputData, handleTextChange } = useRegistrationContext();
  console.log(userInputData)
  
  return (
    <>
      <div className="input-wrapper">
        <label htmlFor="aboutMe">About Me:</label>
        <textarea
          id="aboutMe"
          name="aboutMe"
          rows={5}
          placeholder="Tell us a little about you!"
          value={userInputData.aboutMe}
          onChange={handleTextChange}
        />
      </div>
      <Buttons />
    </>
  );
}
