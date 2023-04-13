import React, { useEffect, useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/config";
import Alert from 'react-bootstrap/Alert';
import "./MentorForm.scss";


const sendContactForm = async ({ userID, name, email, comment, phoneNumber, bestMethodOfContact }) => {
  try {
    const docRef = collection(db, "mentorRequest");
    await addDoc(docRef, {
      userID,
      name,
      email,
      phoneNumber,
      bestMethodOfContact,
      comment,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

function MentorForm({userProfileFormValues, currentUser}) {
  console.log(userProfileFormValues)

  const [uploadMessage, setUploadMessage] = useState("");
// Form values
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [comment, setComment] = useState("");
const [bestMethodOfContact, setBestMethodOfContact] = useState('')

useEffect(() => {
  if (userProfileFormValues.length) {
    setName(userProfileFormValues.firstName + " " + userProfileFormValues.lastName);
    setPhoneNumber(userProfileFormValues.phone_number);
  }
  setEmail(currentUser.email);
}, [userProfileFormValues])

  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      userID: currentUser.uid,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      bestMethodOfContact: bestMethodOfContact,
      comment: comment,
    });

    if (res === 0) {
      setName("");
      setEmail("");
      setPhoneNumber("");
      setComment("");
      setBestMethodOfContact("")
      setUploadMessage("We're happy to help. A Pawster Mentor will reach out in the next 24-48hrs. ");
    } else {
      setUploadMessage("Something went wrong! Please try again later or call (800)-123-4567 for customer service.");
    }
  };


  return (
    <div className="mentor-form-container">
      <h4 className="name">{"Pawster Mentor Form"}</h4>
      <div>
        <div>
          {uploadMessage.includes("We're happy") && (
            <Alert variant="success" onClose={() => setUploadMessage("")} dismissible>
         {uploadMessage}
          </Alert>
          )}

        {uploadMessage.includes("Something") && (
            <Alert variant="danger" onClose={() => setUploadMessage("")} dismissible>
         {uploadMessage}
          </Alert>
          )}        
        </div>

        <form onSubmit={submitContact}>
          <div className="col">
            <label>Name: </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <label>Email Address:</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col">
            <label>Phone Number:</label>
            <input
              required
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="col">
            <label>Best Contact Method: </label>
            <select
              id="bestMethodOfContact"
              name="bestMethodOfContact"
              value={bestMethodOfContact}
              onChange={(e) => setBestMethodOfContact(e.target.value)}
              required
            >
              <option value="---">---</option>
              <option value="call">Call</option>
              <option value="email">Email</option>
            </select>
          </div>
          <div className="col comment">
            <label>Comment:</label>
            <textarea
              rows={5}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="form-button">
            <button type="submit" className="form-button">
              Send Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MentorForm;
