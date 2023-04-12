import React from "react";
import {
  TinderDataRetrival,
  TabsContainer,
  NavBarContainer,
} from "../components/index";
import { useAuth } from "../context/AuthContext";
import ShelterHome from "./Shelter/ShelterHome";
import './Home.scss'

function Home() {
  const { userType } = useAuth();

  if(userType) {
    return (
      <>
        {userType === "user" ? (
          <>
            <div className="left-container">
              <NavBarContainer />
              <TabsContainer />
            </div>
            <div className="right-container">
              <TinderDataRetrival />
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
}

export default Home;
