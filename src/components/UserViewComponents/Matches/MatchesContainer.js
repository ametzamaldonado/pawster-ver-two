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
  const [userPetMatches, setUserPetMatches] = useState([]);

  const findUserPetMatches = async () => {
    let path = `users/${currentUser.uid}/matches`;
    const matches = query(collection(db, path));
    const querySnapshot = await getDocs(matches);
    const userMatches = querySnapshot.docs.map((el) => el.data());
    if(userMatches){
      setNoMatches(false)
      setUserPetMatches(userMatches);
      console.log(userPetMatches)
    }
  };


  useEffect(() => {
    findUserPetMatches();
  }, []);

  return (
    <div className="matches-container">
      {loading && "Loading..."}
      {noMatches && <NoMatches />}
      {userPetMatches?.map((el, index) => (
        <MatchesCard key={index} userName={el.name} image={el.images[0]} />
      ))}

    </div>
  );
}

export default MatchesContainer;
