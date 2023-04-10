import React, { useState, useEffect } from "react";
import MatchesCard from "./MatchesCard";
import { useAuth } from "../../../context/AuthContext";
import "./MatchesContainer.scss";
import { collection, query, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase/config";

function MatchesContainer() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userDocs, setUserDocs] = useState([]);

  let path = `users/${currentUser.uid}/matches`;

  const findMatches = async (id) => {
    const matches = query(collection(db, path));
    const querySnapshot = await getDocs(matches);

    const data = querySnapshot.docs.map((el) => el.data());
        if (data) {
          setLoading(false);
          setUserDocs(data);
        } else {
          console.log("No such document!");
        }
    };

  useEffect(() => {
    findMatches(currentUser.uid);
  }, [currentUser]);

  return (
    <div className="matches-container">
      {loading && "Loading..."}
      {userDocs?.map((el, index) => (
        <MatchesCard key={index} userName={el.userName} image={el.image} />
      ))}

    </div>
  );
}

export default MatchesContainer;
