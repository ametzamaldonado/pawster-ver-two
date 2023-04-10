import React from 'react';
import { useAuth } from "../../context/AuthContext"
// import MatchesContainer from '../../../components/Matches/MatchesContainer';

function ShelterHome() {
  const { logout } = useAuth();
  return (
    <>
    <h1>Hi from shelter</h1>
    <button onClick={logout}>Log Out</button>
    </>
  )
}

export default ShelterHome