import { useRegistrationContext } from "../../../../context/UserRegistrationContext";
import React from "react";
import "./Buttons.scss";

export default function Buttons() {
  const { setPage, prevHide, continueHide, submitHide, handleSubmit } =
    useRegistrationContext();
  const handlePrev = () => setPage((prev) => prev - 1);
  const handleContinue = () => setPage((prev) => prev + 1);

  return (
    <div className="buttons-container">
      <div className={`button-wrapper ${prevHide}`}>
        <button className="back-btn" onClick={handlePrev}>
          <i className="bi bi-arrow-left" /> Back
        </button>
      </div>

      <div className={`button-wrapper ${continueHide}`}>
        <button className="next-btn" onClick={handleContinue}>
          Continue <i className="bi bi-arrow-right" />
        </button>
      </div>

      <div className={`button-wrapper ${submitHide}`}>
        <button className="submit-btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
