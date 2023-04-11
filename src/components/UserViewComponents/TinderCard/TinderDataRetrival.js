import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../context/AuthContext";
import { collection, query, getDocs, setDoc, doc } from "@firebase/firestore";
import TinderContainer from "./TinderContainer";

const cards = [
  {
    image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
    color: '#55ccff'
  },
  {
    image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
    color: '#e8e8e8'
  },
  {
    image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
    color: '#0a043c'
  },
  {
    image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
    color: 'black'
  }
];

function TinderDataRetrival() {
  
  // const { currentUser } = useAuth();
  // const [petsData, setPetsData] = useState([]);

  // const findMatches = async (id) => {
  //   const matches = query(collection(db, `petsUploaded`));
  //   const querySnapshot = await getDocs(matches);

  //   const data = querySnapshot.docs.map((el) => el.data());
  //   console.log(data);
  //   if (data) {
  //     setPetsData(data);
  //   } else {
  //     console.log("No pets uploaded!");
  //   }
  // };

  // const findUserMatches = async () => {
  //   let path = `users/${currentUser.uid}/matches`;
  //   const matches = query(collection(db, path));
  //   const querySnapshot = await getDocs(matches);
  //   if (!!querySnapshot.docs) {
  //     return;
  //   }
  //   const userMatches = querySnapshot.docs.map((el) => el.data());
  //   console.log(userMatches);
  //   if (userMatches.length) {
  //     let result = petsData;
  //     for (let i = 0; i < userMatches.length; i++) {
  //       for (let j = 0; j < petsData.length; j++) {
  //         if (petsData[j].shelterId !== userMatches[i].petId) {
  //           result.splice(j, 1);
  //         }
  //       }
  //       setPetsData(result);
  //     }
  //   }
  // };

  // const addPetMatch = async (petId) => {
  //   let path = `users/${currentUser.uid}/matches`;
  //   try {
  //     await setDoc(doc(db, path, petId), {});
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   findMatches();
  //   findUserMatches();
  // }, []);

  // const changePhotoDisplayed = () => {
    
  // }
//  return <>
//    {petsData && <TinderContainer petsData={petsData} addPetMatch={addPetMatch} />
//   }
//   </>; 

  return (
    <>
    {
      cards.length && <TinderContainer cards={cards} /> 
    }
    </>
  )
}

export default TinderDataRetrival;
