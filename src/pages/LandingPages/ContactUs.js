import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';

import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./ContactUs.scss";

const sendContactForm = async ({ name, email, comment }) => {
  try {
    const docRef = collection(db, "contactForm");
    await addDoc(docRef, {
      name,
      email,
      comment,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

function ContactUs() {
  const [uploadMessage, setUploadMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  console.log(name, email, comment);

  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: name,
      email: email,
      comment: comment,
    });

    if (res === 0) {
      setName("");
      setEmail("");
      setComment("");
      setUploadMessage("Thank you for your valuable comment!");
    } else {
      setUploadMessage("Something went wrong! Please try again");
    }
  };

  return (
    <div className="contact-us-container">
      <h1>{"Contact Us"}</h1>
      <div>
        <div>
          {uploadMessage.includes("Thank you") && (
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
            <label>Name</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <label>Email Address</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col">
            <label>Comment</label>
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

export default ContactUs;
