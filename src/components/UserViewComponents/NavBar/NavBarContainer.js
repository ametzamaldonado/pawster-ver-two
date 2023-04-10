import React from 'react';
import NavBar from "./NavBar";
import { useAuth } from '../../../context/AuthContext';

function NavBarContainer() {
  const { currentUser } = useAuth()

  return (
    <div>
        <NavBar profilePic={currentUser.photoURL}/>
    </div>
  )
}

export default NavBarContainer