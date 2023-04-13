import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, deleteUser } from "firebase/auth";
import { db, auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(true);
  const [userProfileFormValues, setUserProfileFormValues] = useState([]);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Successfully signing you out!");
      })
      .catch((error) => {
        // An error happened.
        alert("Error encountered! ", error);
      });
  }

  async function deleteUserAccount(uid) {
    try {
      // Delete the user's data in Firestore
      const userQuery = query(
        collection(db, "users"),
        where("uid", "==", uid)
      );
      const querySnapshot = await getDocs(userQuery);

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        console.log("User data successfully deleted.");
      });
      // Delete the user's authentication data
      await deleteUser(auth.currentUser);
      logout()
    } catch (error) {
      alert("Error deleting user: ", error);
    }
  }
  

  const findUserType = async (id) => {
    const userInfo = query(collection(db, "users"), where("uid", "==", id));
    const querySnapshot = await getDocs(userInfo);

    querySnapshot.forEach((doc) => {
      const { typeOfUser, rentMortage } = doc.data();
      setUserType(typeOfUser);

      if (rentMortage) {
        // console.log('userData:', doc.data());
        setUserProfileFormValues(doc.data());
      }
      // console.log(doc.id, ' => ', doc.data());
    });
  };

  // Update UserProfile Picture
  function updateUserProfilePhoto(photoURL) {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      photoURL: photoURL,
    }));
  }

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
        findUserType(user.uid);
        // console.log(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
    userType,
    setUserType,
    userProfileFormValues,
    updateUserProfilePhoto,
    deleteUserAccount,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
