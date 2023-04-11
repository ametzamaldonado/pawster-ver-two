import React from 'react';
import { useAuth } from "../../context/AuthContext";
import "./ShelterHome.scss"
// import MatchesContainer from '../../../components/Matches/MatchesContainer';

function ShelterHome() {
  const { logout } = useAuth();
  return (
    <>
    <h1>Hi from shelter</h1>
    <button onClick={logout}>Log Out</button>
    <div className="splash-img-container">
      <div className="temp-display">
    </div>
    </div>
    
    </>
  )
}

export default ShelterHome