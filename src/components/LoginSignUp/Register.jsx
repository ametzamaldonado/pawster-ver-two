import React, { useState } from "react";
import Add from "../../img/add-image-64.png"
import Unknown from "../../img/unknown_person.jpeg"
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { db, storage } from "../../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

import logo from "../../img/white-red.png";

const Register = () => {
  const { signup, setUserType } = useAuth();
  const [ userTypeRadio, setUserTypeRadio ] = useState('user')
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmitUser = async (e) => {
    setLoading(true);
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const passwordConfirmation = e.target[3].value;
    const file = e.target[4].files[0] || Unknown;

    if (password !== passwordConfirmation) {
      return setErr("Passwords do not match");
    } else {
      try {
        // create user
        const response = await signup(email, password);
        // create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);

        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(response.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
           
                await setDoc(doc(db, "users", response.user.uid), {
                  uid: response.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                  typeOfUser: userTypeRadio ,
                });
  
              
                setUserType(userTypeRadio)
              // await setUserTypeDocs(userType, response)

              navigate("/");
            } catch (err) {
              console.log(err);
              setErr(err);
              setLoading(false);
              return;
            }
          });
        });
      } catch (err) {
        // db catch
        setErr("Failed to create an account because: " + err);
        setLoading(false);
      }
    }
  };

  function showFileName() {
    const input = document.getElementById("file");
    const label = document.getElementById("labelText");
    if (input.value) {
      label.innerHTML = "Photo selected <i class='bi bi-check'></i>";
    } else {
      label.innerHTML = "Add an avatar";
    }
  }  
  
  return (
    <div className="wholePage-container">
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">
          <a href="/home">
              <img src={logo} alt="logo" />
            </a>
          </span>
          <span className="title">Register</span>
          <div className="radio-selection">
            <label>
              <input
                type="radio"
                value="user"
                checked={userTypeRadio === 'user'}
                onChange={(e) => setUserTypeRadio(e.target.value)}
                required="required"
              />
              {' '}User
            </label>
            <label>
              <input
                type="radio"
                value="shelter"
                disabled={true} // disabled until I can get the shelter view working!
                checked={userTypeRadio === "shelter"}
                onChange={(e) => setUserTypeRadio(e.target.value)}
              />
              {' '}Shelter
            </label>
          </div>
          <form onSubmit={handleSubmitUser }>
            <label>Username</label>
            <input required type="text" placeholder="Username.." />
            <label>Email</label>
            <input required type="email" placeholder="Email.." />
            <label>Password</label>
            <input required type="password" placeholder="Password.." />
            <label>Password Confirmation</label>
            <input required type="password" placeholder="Confirm Password.." />

            <input required style={{ display: "none" }} type="file" id="file" accept=".jpg, .jpeg, .png" onChange={showFileName} />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span className="preview"></span>
              <span id="labelText">Add an avatar</span>
            </label>
            <button type="submit">Sign up</button>
            {loading && "Uploading and compressing the image please wait..."}
            {err && <span>Something went wrong: {err}</span>}
          </form>
          <p>
            You don't have an account?
            <Link to="/login">
              {" "}
              <button className="no_buttonStyling">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
