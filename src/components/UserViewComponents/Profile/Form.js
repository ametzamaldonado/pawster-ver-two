import React from "react";
import ContactInfo from "./FormComponents/ContactInfo";
import IncomeInfo from "./FormComponents/IncomeInfo";
import "./Form.scss";

function Form() {

  return (
    <div className="allForms">
      {/* <form onSubmit={handleSubmit}> */}
   
        {/* <ContactInfo
          userInputData={userInputData}
          handleTextChange={handleTextChange}
          handleAddressChange={handleAddressChange}
        />
        <IncomeInfo
          userInputData={userInputData}
          handleTextChange={handleTextChange}
        /> */}
        <button type="submit" >
          Submit
        </button>
      {/* </form> */}
    </div>
  );
}

export default Form;
