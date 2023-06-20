import React from "react";
import SwitchCase from "./SwitchCase";

export default function UserRegisterForm({
  step,
  setStep,
  handleSubmit,
  userInputData,
  setUserInputData,
}) {


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleTextChange = (event) => {
    setUserInputData({
      ...userInputData,
      [event.target.id]: event.target.value,
    });
  };

  const handleAddressChange = (event) => {
    setUserInputData((prevState) => {
      return {
        ...prevState,
        address: {
          ...prevState.address,
          [event.target.id]: event.target.value,
        },
      };
    });
  };


  return (
    <SwitchCase step={step} nextStep={nextStep} prevStep={prevStep} userInputData={userInputData} handleTextChange={handleTextChange} handleAddressChange={handleAddressChange} handleSubmit={handleSubmit}/>
  )
 
}
