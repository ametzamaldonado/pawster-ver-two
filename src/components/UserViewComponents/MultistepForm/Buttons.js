import React from "react";
import "./Buttons.scss";

export default function Buttons({ step, prevStep, nextStep, submitForm }) {
  if (step === 1) {
    return (
      <div className="buttons-container">
        <div className="button-wrapper">
          <button className="next-btn" onClick={nextStep}>
            Continue {" "}
            <i class="bi bi-arrow-right" />
          </button>
        </div>
      </div>
    );
  } else if (step < 7) {
    return (
      <div className="buttons-container">
        <div className="button-wrapper">
          <i class="bi bi-arrow-left" />
          <button className="back-btn" onClick={prevStep}>
            Back
          </button>
        </div>
        <div className="button-wrapper">
        <button className="next-btn" onClick={nextStep}>
            Continue {" "}
            <i class="bi bi-arrow-right" />
          </button>
        </div>
      </div>
    );
  } else if (step === 7) {
    return (
      <div className="buttons-container">
        <div className="button-wrapper">
          
          <button className="back-btn" onClick={prevStep}>
 
                <i class="bi bi-arrow-left" />
            Back

            
          </button>
        </div>
        <div className="button-wrapper">
          <button className="submit-btn" type="submit" onClick={submitForm}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
