import React from 'react';
import NavBar from "./NavBar"

function NavBarContainer() {
    const profilePic = 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e'
  return (
    <div>
        <NavBar profilePic={profilePic}/>
    </div>
  )
}

export default NavBarContainer