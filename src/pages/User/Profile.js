import React from "react";
import {
  NavBarContainer,
  TabsContainer,
  ProfileContainer,
} from "../../components";
import { UserRegistrationProvider } from "../../context/UserRegistrationContext";

function Profile() {
  return (
    <>
      <div className="left-container">
        <NavBarContainer />
        <TabsContainer />
      </div>
      <div className="right-container">
        <div>
          <UserRegistrationProvider>
            <ProfileContainer />
          </UserRegistrationProvider>
        </div>
      </div>
    </>
  );
}

export default Profile;
