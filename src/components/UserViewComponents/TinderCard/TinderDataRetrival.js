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
    console.log(querySnapshot)
    if (!!querySnapshot.docs) {
      return;
    }
    const userMatches = querySnapshot.docs.map((el) => el.data());
    console.log(userMatches);
    if (userMatches.length) {
      let result = petsData;
      for (let i = 0; i < userMatches.length; i++) {
        for (let j = 0; j < dataArray.length; j++) {
          if (dataArray[j].shelterId !== userMatches[i].petId) {
            result.splice(j, 1);
          }
        }
       
      }
      setPetsData(result);
    }

  };

  const addPetMatch = async (petId) => {
    let path = `users/${currentUser.uid}/matches`;
    try {
      await setDoc(doc(db, path, petId), {});
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findMatches();
  }, [petsData, setPetsData]);

  return (
    <>
     {petsData && <TinderContainer petsData={petsData} addPetMatch={addPetMatch} />}

    </>
  )
}

export default TinderDataRetrival;
