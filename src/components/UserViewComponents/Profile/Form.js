import React from "react";
import ContactInfo from "./FormComponents/ContactInfo";
import IncomeInfo from "./FormComponents/IncomeInfo";
import { useRegistrationContext } from "../../../context/UserRegistrationContext"
import "./Form.scss";

function Form() {
  const { handleSubmit } = useRegistrationContext()

  return (
    <div className="allForms">
      <form onSubmit={handleSubmit}>
        <ContactInfo />
        <IncomeInfo />
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
