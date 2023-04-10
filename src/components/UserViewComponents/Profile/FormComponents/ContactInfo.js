import React from "react";

function ContactInfo() {
  return (
    <div className="contactInfo-form">
      <div className="names">
        <label for="firstName">First Name:</label>
        <input id="firstName" name="firstName" type="text" />

        <label for="lastName">Last Name:</label>
        <input id="lastName" name="lastName" type="text" />
      </div>

      <label for="age">Age</label>
      <input type="number" id="age" name="age" min="18" max="100" />

      <label for="phone-number">Phone Number:</label>
      <input
        type="tel"
        id="phone-number"
        name="phone-number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      />
    </div>
  );
}

export default ContactInfo;
