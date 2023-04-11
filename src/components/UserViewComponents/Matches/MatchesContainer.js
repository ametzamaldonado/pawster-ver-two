import React, { useState, useEffect } from "react";
import MatchesCard from "./MatchesCard";
import { useAuth } from "../../../context/AuthContext";
import "./MatchesContainer.scss";
import { collection, query, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase/config";
import NoMatches from "./NoMatches";

function MatchesContainer() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [noMatches, setNoMatches] = useState(true);
  const [userDocs, setUserDocs] = useState([]);

  // let path = `users/${currentUser.uid}/matches`;

  // const findMatches = async (id) => {
  //   const matches = query(collection(db, path));
  //   const querySnapshot = await getDocs(matches);

  //   const data = 
  //   querySnapshot.docs.map((el) => el.data());
  //       if (data) {
  //         setUserDocs(data);
  //         setLoading(false);
  //       } else {
  //         console.log("No such document!");
  //         setNoMatches(true)
  //         setLoading(false);
  //       }   
  //   };

  // useEffect(() => {
  //   findMatches(currentUser.uid);
  // }, [currentUser]);

  return (
    <div className="matches-container">
      {loading && "Loading..."}
      {noMatches && <NoMatches />}
      {userDocs?.map((el, index) => (
        <MatchesCard key={index} userName={el.userName} image={el.image} />
      ))}

    </div>
  );
}

export default MatchesContainer;
