import React from 'react';
import { NavBarContainer, TabsContainer, SettingsContainer } from '../../components/index';

function Settings() {
  return (
    <>
      <div className="left-container">
        <NavBarContainer />
        <TabsContainer />
      </div>
      <div className="right-container">
       <SettingsContainer />
      </div>
    </>
  )
}

export default Settings