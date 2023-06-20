import Buttons from "./Buttons";
import "./SwitchCase.scss"

export default function SwitchCase ({ step, nextStep, prevStep, userInputData, handleTextChange, handleAddressChange, handleSubmit }) {
    switch (step) {
        case 1:
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
              <Buttons step={step} nextStep={nextStep} />
            </>
          );
        case 2:
          return (
            <>
              <div className="side-by-side">
                <div className="input-wrapper">
                  <label htmlFor="firstName">First Name: </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={userInputData.firstName}
                    onChange={handleTextChange}
                    required
                  />
                </div>
    
                <div className="input-wrapper">
                  <label htmlFor="lastName">Last Name: </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={userInputData.lastName}
                    onChange={handleTextChange}
                    required
                  />
                </div>
              </div>
              {/* Date of Birth */}
              <div className="input-wrapper">
                <label htmlFor="age">Age:</label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={userInputData.age}
                  onChange={handleTextChange}
                  required
                />
              </div>
    
              {/* Phone Number */}
              <div className="input-wrapper">
                <label htmlFor="phone_number">Phone Number:</label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7980"
                  value={userInputData.phone_number}
                  onChange={handleTextChange}
                  required
                />
              </div>
              <Buttons step={step} prevStep={prevStep} nextStep={nextStep} />
            </>
          );
        case 3:
          return (
            <>
              {/* Address  */}
              <div className="address-container">
                <div className="input-wrapper">
                  <label>Address: </label>
                  <input
                    type="text"
                    id="street_address"
                    name="street_address"
                    autoComplete="street_address"
                    placeholder="Street Address"
                    value={userInputData["address"].street_address}
                    onChange={handleAddressChange}
                    required
                  />
    
                  <input
                    type="text"
                    id="street_address_two"
                    name="street_address_two"
                    autoComplete="street_address"
                    placeholder="Street Address line 2 (optional)"
                    value={userInputData["address"].street_address_two}
                    onChange={handleAddressChange}
                  />
                </div>
    
                <div className="side-by-side">
                  <div className="input-wrapper">
                    <label>Zipcode: </label>
                    <input
                      id="postal_code"
                      name="postal_code"
                      autoComplete="postal_code"
                      value={userInputData["address"].postal_code}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
    
                  <div className="input-wrapper">
                    <label>City: </label>
                    <input
                      required
                      type="text"
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      value={userInputData["address"].city}
                      onChange={handleAddressChange}
                    />
                  </div>
    
                  <div className="input-wrapper">
                    <label>State</label>
                    <select
                      id="state"
                      name="state"
                      value={userInputData["address"].state}
                      onChange={handleAddressChange}
                      required
                    >
                      <option value="---">---</option>
                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Arizona">Arizona</option>
                      <option value="Arkansas">Arkansas</option>
                      <option value="California">California</option>
                      <option value="Colorado">Colorado</option>
                      <option value="Connecticut">Connecticut</option>
                      <option value="Delaware">Delaware</option>
                      <option value="District of Columbia">
                        District of Columbia
                      </option>
                      <option value="Florida">Florida</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Guam">Guam</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Idaho">Idaho</option>
                      <option value="Illinois">Illinois</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Iowa">Iowa</option>
                      <option value="Kansas">Kansas</option>
                      <option value="Kentucky">Kentucky</option>
                      <option value="Louisiana">Louisiana</option>
                      <option value="Maine">Maine</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="Michigan">Michigan</option>
                      <option value="Minnesota">Minnesota</option>
                      <option value="Mississippi">Mississippi</option>
                      <option value="Missouri">Missouri</option>
                      <option value="Montana">Montana</option>
                      <option value="Nebraska">Nebraska</option>
                      <option value="Nevada">Nevada</option>
                      <option value="New Hampshire">New Hampshire</option>
                      <option value="New Jersey">New Jersey</option>
                      <option value="New Mexico">New Mexico</option>
                      <option value="New York">New York</option>
                      <option value="North Carolina">North Carolina</option>
                      <option value="North Dakota">North Dakota</option>
                      <option value="Northern Marianas Islands">
                        Northern Marianas Islands
                      </option>
                      <option value="Ohio">Ohio</option>
                      <option value="Oklahoma">Oklahoma</option>
                      <option value="Oregon">Oregon</option>
                      <option value="Pennsylvania">Pennsylvania</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Rhode Island">Rhode Island</option>
                      <option value="South Carolina">South Carolina</option>
                      <option value="South Dakota">South Dakota</option>
                      <option value="Tennessee">Tennessee</option>
                      <option value="Texas">Texas</option>
                      <option value="Utah">Utah</option>
                      <option value="Vermont">Vermont</option>
                      <option value="Virginia">Virginia</option>
                      <option value="Virgin Islands">Virgin Islands</option>
                      <option value="Washington">Washington</option>
                      <option value="West Virginia">West Virginia</option>
                      <option value="Wisconsin">Wisconsin</option>
                      <option value="Wyoming">Wyoming</option>
                    </select>
                  </div>
                </div>
              </div>
              <Buttons step={step} prevStep={prevStep} nextStep={nextStep} />
            </>
          );
        case 4:
          return (
            <>
              {/* Residence Type */}
              <div className="input-wrapper">
                <label htmlFor="residenceType">Residence Type: </label>
                <select
                  name="residenceType"
                  id="residenceType"
                  value={userInputData.residenceType}
                  onChange={handleTextChange}
                  required
                >
                  <option value="">--Please choose an option--</option>
                  <option value="House">House</option>
                  <option value="Townhome">Townhome</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condo">Condo</option>
                </select>
              </div>
    
              <Buttons step={step} prevStep={prevStep} nextStep={nextStep} />
            </>
          );
        case 5:
          return (
            <>
              {/* Annual Income */}
              <div className="side-by-side">
                <div className="input-wrapper">
                  <label htmlFor="annualIncome">Annual Income: </label>
                  <input
                    id="annualIncome"
                    name="annualIncome"
                    type="number"
                    value={userInputData.annualIncome}
                    onChange={handleTextChange}
                    required
                  />
                </div>
    
                {/* Rent / Mortgage */}
                <div className="input-wrapper">
                  <label htmlFor="rentMortage">Rent/Mortgage: </label>
                  <input
                    id="rentMortage"
                    name="rentMortage"
                    type="number"
                    value={userInputData.rentMortage}
                    onChange={handleTextChange}
                    required
                  />
                </div>
              </div>
    
              <Buttons step={step} prevStep={prevStep} nextStep={nextStep} />
            </>
          );
        case 6:
          return (
            <>
              {/* HouseHold Size */}
              <div className="side-by-side">
                <div className="input-wrapper">
                  <label htmlFor="householdSize">House Hold Size: </label>
                  <input
                    id="householdSize"
                    name="householdSize"
                    type="number"
                    min="1"
                    max="20"
                    value={userInputData.householdSize}
                    onChange={handleTextChange}
                    required
                  />
                </div>
    
                {/* Pets in the house */}
                <div className="input-wrapper">
                  <label htmlFor="numberOfPrevPets">Pets in the House: </label>
                  <input
                    id="numberOfPrevPets"
                    name="numberOfPrevPets"
                    type="number"
                    min="0"
                    max="20"
                    value={userInputData.numberOfPrevPets}
                    onChange={handleTextChange}
                    required
                  />
                </div>
              </div>
    
              <Buttons step={step} prevStep={prevStep} nextStep={nextStep} />
            </>
          );
        case 7:
          return (
            <>
              <h1>Last step</h1>
              {/* <ConfirmInfo
                            formValues={formValues}
                        /> */}
              <Buttons step={step} prevStep={prevStep} handleSubmit={handleSubmit} />
            </>
          );
        default:
          console.log("No more steps");
      }
}