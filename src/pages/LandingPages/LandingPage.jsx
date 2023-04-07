import React from 'react';
import './LandingPage.scss'
import NavBar from './NavBar';
import StepsNavBody from './StepsNavBody';
import Cards from "./Cards"
import AboutUs from './AboutUs';
import TeamCards from './TeamCards';
import ContactUs from './ContactUs';
import Footer from './Footer';


function LandingPage() {

  return (
    <div className='wholePage-container'>
      <NavBar />
        <div className="splash-img-container">
            <img src="https://www.petsandhousing.org/wp-content/uploads/2022/11/Lease-Retention-Web-Banner-1.png" alt='splash-img' className='splash-img'/>
            {/* <img src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F09%2F08%2Fhow-do-you-know-if-your-dog-is-in-pain-1234761388-2000.jpg' alt='splash-img' className='splash-img'/> */}
        </div>
      <StepsNavBody />
      <AboutUs />
      <TeamCards />
      <Cards />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default LandingPage