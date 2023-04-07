import React from "react";
import {
  TinderContainer,
  TabsContainer,
  NavBarContainer,
} from "../../components/index";
import { useAuth } from "../../context/AuthContext";

function Home() {
  const { userType } = useAuth();
  console.log(userType);

  return (
    <>
      {userType === "user" ? (
        <>
          <div className="left-container">
            <NavBarContainer />
            <TabsContainer />
          </div>
          <div className="right-container">
            <TinderContainer />
          </div>
        </>
      ) : (
        <h1>{userType}</h1>
      )}
    </>
  );
}

export default Home;
