import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../context/AuthContext";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import ContactInfo from "./FormComponents/ContactInfo";
import IncomeInfo from "./FormComponents/IncomeInfo";
import "./Form.scss";

function Form() {
  const { currentUser } = useAuth();
  const [userInputData, setUserInputData] = useState({
    aboutMe: '',
    firstName: "",
    lastName: "",
    age: '',
    phone_number: "",
    annualIncome: "",
    rentMortage: "",
    householdSize: '',
    numberOfPrevPets: '',
    residenceType: "",
    address: {
        street_address: '',
        street_address_two: '',
        postal_code: '',
        city: '',
        state: ''
    }
  });

  const userRef = doc(db, "users", currentUser.uid);

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


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //create user on firestore
      await updateDoc(userRef, {
        aboutMe:userInputData["aboutMe"],
        firstName: userInputData["firstName"],
        lastName: userInputData["lastName"],
        age: userInputData["age"],
        annualIncome: userInputData["annualIncome"],
        rentMortage: userInputData["rentMortage"],
        householdSize: userInputData["householdSize"],
        numberOfPrevPets: userInputData["numberOfPrevPets"],
        residenceType: userInputData["residenceType"],
        address: userInputData["address"],
        phone_number: userInputData['phone_number'],
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    async function getData (){
        const userData = (await getDoc(userRef)).data();
        if(userData['rentMortage']) {
          setUserInputData(userData);
        }
    }

    getData()
}, [])




  return (
    <div className="allForms">
      <form onSubmit={handleSubmit}>
   
        <ContactInfo
          userInputData={userInputData}
          handleTextChange={handleTextChange}
          handleAddressChange={handleAddressChange}
        />
        <IncomeInfo
          userInputData={userInputData}
          handleTextChange={handleTextChange}
        />
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
