import React from "react";
import {
  NavBarContainer,
  TabsContainer,
  ProfileContainer,
} from "../../components";

function Profile() {
  return (
    <>
      <div className="left-container">
        <NavBarContainer />
        <TabsContainer />
      </div>
      <div className="right-container">
        <div>
          <ProfileContainer />
        </div>
      </div>
    </>
  );
}

export default Profile;
