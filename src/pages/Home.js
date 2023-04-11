import React from "react";
import {
  TinderContainer,
  TabsContainer,
  NavBarContainer,
} from "../components/index";
import { useAuth } from "../context/AuthContext";
import ShelterHome from "./Shelter/ShelterHome";
import TinderDataRetrival from "../components/UserViewComponents/TinderCard/TinderDataRetrival";
import './Home.scss'

function Home() {
  const { userType } = useAuth();

  return (
    <>
      {userType !== "user" ? (
        <>
          <div className="left-container">
            <NavBarContainer />
            <TabsContainer />
          </div>
          <div className="right-container">
            <TinderDataRetrival />
            {/* <TinderContainer /> */}
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

export default Home;
