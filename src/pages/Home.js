import React, { useEffect, useState } from "react";
import {
  TinderDataRetrival,
  TabsContainer,
  NavBarContainer,
} from "../components/index";
import { useAuth } from "../context/AuthContext";
import ShelterHome from "./Shelter/ShelterHome";
import { collection, query, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase/config";
import './Home.scss'

function Home() {
  const { userType, currentUser } = useAuth();

  // Finds User Specific Pet Matches
  // const findUserPetMatches = async () => {
  //   let path = `users/${currentUser.uid}/matches`;
  //   const matches = query(collection(db, path));
  //   onSnapshot(matches, (querySnapshot) => {
  //     const userMatches = querySnapshot.docs.map((el) => el.data());
  //     if (userMatches.length) {
  //       setUserPetMatches(userMatches);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   findUserPetMatches();
  // }, []);

  if(userType) {
    return (
      <>
        {userType === "user" ? (
          <>
            <div className="left-container">
              <NavBarContainer />
              <TabsContainer />
            </div>
            <div className="right-container">
              <TinderDataRetrival />
            </div>
          </>
        ) : (
          <div className="wholePage-container">
            <ShelterHome />
            
          </div>
        )}
      </>
    );
  }
}

export default Home;
