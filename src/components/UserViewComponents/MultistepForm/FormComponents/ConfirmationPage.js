import React from "react";
import Buttons from "./Buttons";
import "./ConfirmationPage.scss";
import { useRegistrationContext } from "../../../../context/UserRegistrationContext";

export default function ConfirmationPage() {
  const { userInputData } = useRegistrationContext();
  const responseArray = [];

  const variableTitles = { 
    'aboutMe': 'About Me',
    'firstName': 'First Name',
    'lastName': 'Last Name',
    'age': 'Age',
    'phone_number': 'Phone Number',
    'annualIncome': 'Annual Income',
    'rentMortage': 'Rent or Mortage',
    'householdSize': 'Household Size',
    'numberOfPrevPets': 'Number of Pets in Your Home',
    'residenceType': 'Residence Type',
    'address': 'Address'
  }

  const structureResponseEntry = (entryName, title, response) => {
    responseArray.push(
      <div key={entryName} className="single-entry">
        <div className="variable-name">{title}: </div>
        <div className="variable-response ">{response}</div>
      </div>
    );
  };

  for (const property in userInputData) {
    let addressResponse = "";

    if (property === "address") {
      const { street_address, street_address_two, postal_code, city, state } =
        userInputData.address;
      addressResponse = `${street_address}, ${street_address_two}, ${postal_code}, ${city}, ${state}`;

      structureResponseEntry('address', variableTitles['address'], addressResponse) 

    } else {  
      structureResponseEntry(property, variableTitles[property], userInputData[property]) 
    }
}

  return (
    <div className="confirmation-display">
      {userInputData ? responseArray.map((el) => el) : null}
      <Buttons />
    </div>
  );
}
