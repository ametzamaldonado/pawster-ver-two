import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import UserRegisterForm from "../components/UserViewComponents/MultistepForm/UserRegisterForm";

function MultistepForm() {
  const [ step, setStep ] = useState(1);
  const { userType, currentUser } = useAuth();
  // const { homePage, setHomePage } = useState('');
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

  // const navigate = useNavigate();

//   useEffect(() => {
//  if (currentUser) {
//     if (userType === "user") {
//       setHomePage("/home");
//     } else {
//       setHomePage("/dashboard");
//     }
//   }
//   })

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
  } catch (err) {
    console.log(err);
  }
};
  
 
  console.log('currentUser: ',currentUser, 'userType: ', userType)
  return (
    <>
    <UserRegisterForm step={step}
    setStep={setStep} userInputData={userInputData}
  setUserInputData={setUserInputData} handleSubmit={handleSubmit}/>
      {/* <h1>Hi</h1>
      {}
      <button onClick={() => navigate(homePage)}>Go home</button> */}
    </>
  );
}

export default MultistepForm;
