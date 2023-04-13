import React, { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { db, storage } from "../.././../firebase/config";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./UpdateProfilePic.scss";

function UpdateProfilePic({ handleLogOut }) {
  const { currentUser, userProfileFormValues, updateUserProfilePhoto } = useAuth();

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    const date = new Date().getTime();
    const storageRef = ref(storage, `${currentUser.displayName + date}`);
    try {
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile picture
            await updateProfile(currentUser, {
              photoURL: downloadURL,
            });
            //create user on firestore
            await updateDoc(doc(db, "users", currentUser.uid), {
              photoURL: downloadURL,
            });
            
            updateUserProfilePhoto(downloadURL);
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (err) {
      // db catch
      console.log(err);
    }
    
  };

  useEffect(() => {

  }, [userProfileFormValues, currentUser])


  return (
    <div className="wrapper">
      <div className="profile">
        <img src={currentUser.photoURL} alt="idk" className="thumbnail" />
        <label htmlFor="file" className="camera">
          <i className="bi bi-camera-fill"></i>
          <input
            required
            style={{ display: "none" }}
            type="file"
            id="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handlePhotoChange(e)}
          />
        </label>
        <h3 className="name">{currentUser.displayName}</h3>
        {userProfileFormValues.age ? 
        <span>Age: {userProfileFormValues.age}</span> :
        null
      }
        

        <p className="description">{userProfileFormValues.aboutMe}</p>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </div>
  );
}

export default UpdateProfilePic;
