import React, { useState } from "react";
import ContactInfo from "./FormComponents/ContactInfo";
import "./Form.scss";
import IncomeInfo from "./FormComponents/IncomeInfo";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../context/AuthContext";
import { updateDoc, doc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

function Form() {
  const { currentUser } = useAuth();
  const [userInputData, setUserInputData] = useState({
    firstName: "",
    lastName: "",
    age: null,
    phoneNumber: "",
    annualIncome: "",
    rentMortage: "",
    householdSize: null,
    numberOfPrevPets: null,
    residenceType: "",
    address: {
        street_address: '',
        street_address_two: '',
        postal_code: '',
        city: '',
        state: ''
    }
  });

  const handleTextChange = (event) => { // works!
    setUserInputData({
      ...userInputData,
      [event.target.id]: event.target.value,
    });
    
  };


  const handleAddressChange = (event) => { // works!
    setUserInputData(prevState => {
        return {
          ...prevState,
          address: {
            ...prevState.address,
            [event.target.id]: event.target.value,
          }
        };
      });
  }

//   Not sure if handle Submit was able to submit form inputs
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userInputData)
    // try {
    //   //Update profile - aka: user PH#
    //   await updateProfile(currentUser, {
    //     phoneNumber: userInputData["phoneNumber"],
    //   });

    //   //create user on firestore
    //   await updateDoc(doc(db, "users", currentUser.uid), {
    //     firstName: userInputData["firstName"],
    //     lastName: userInputData["lastName"],
    //     age: userInputData["age"],
    //     phoneNumber: userInputData["phoneNumber"],
    //     annualIncome: userInputData["annualIncome"],
    //     rentMortage: userInputData["rentMortage"],
    //     householdSize: userInputData["householdSize"],
    //     numberOfPrevPets: userInputData["numberOfPrevPets"],
    //     residenceType: userInputData["residenceType"],
    //     address: userInputData["address"]
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    e.reset()
  };


  return (
    <div className="allForms">
      <form on>
        <ContactInfo
          userInputData={userInputData}
          handleTextChange={handleTextChange}
          handleAddressChange={handleAddressChange}
        />
        <IncomeInfo
          userInputData={userInputData}
          handleTextChange={handleTextChange}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
