import React from 'react';
import './LandingPage.scss'
import NavBar from './NavBar';
import UserSteps from './UserSteps';
import OrganizationInfo from "./OrganizationInfo"
import AboutUs from './AboutUs';
import TeamCards from './TeamCards';
import ContactUs from './ContactUs';
import Footer from './Footer';


function LandingPage() {

  return (
    <div className='wholePage-container'>
      <NavBar />
        <div className="splash-img-container">
            <div className='image-background'>
            </div>
        </div>
      <UserSteps />
      <AboutUs />
      <TeamCards />
      <OrganizationInfo />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default LandingPage