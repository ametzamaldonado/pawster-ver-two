import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../context/AuthContext";
import { collection, query, getDocs, setDoc, doc } from "@firebase/firestore";
import TinderContainer from "./TinderContainer";

function TinderDataRetrival() { 
  const { currentUser } = useAuth();
  const [petsData, setPetsData] = useState([]);

  const findMatches = async () => {
    const matches = query(collection(db, `petsUploaded`));
    const querySnapshot = await getDocs(matches);

    const data = querySnapshot.docs.map((el) => el.data());
    if (data) {
      findUserMatches(data)
    } else {
      console.log("No pets uploaded!");
    }
  };

  const findUserMatches = async (dataArray) => {
    let path = `users/${currentUser.uid}/matches`;
    const matches = query(collection(db, path));
    const querySnapshot = await getDocs(matches);
    const userMatches = querySnapshot.docs.map((el) => el.data());    
    let result = await dataArray.filter((el) => !userMatches.some((match) => match.uid === el.uid));
    setPetsData(result);
  };

  const addPetMatch = async (petId, petData) => {
    const userRef = doc(db, `users/${currentUser.uid}/matches`, petId);
    try {
      await setDoc(userRef, petData);
      console.log(`Added match with ID: ${petId}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findMatches();
  }, []);

  return (
    <>
     {petsData && <TinderContainer petsData={petsData} addPetMatch={addPetMatch} />}

    </>
  )
}

export default TinderDataRetrival;
