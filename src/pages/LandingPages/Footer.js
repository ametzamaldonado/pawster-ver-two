import React from 'react';
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className="content">
            <div className="line-one">
                Helping our Fur-Pals find homes
            </div>
         
            <div className="line-two">
                Copyright © 2023  |  {' '}
                <a href={`mailto:pawster.app@gmail.com`}><button className='no_buttonStyling'>pawster.app@gmail.com</button></a>
            </div>
        </div>
    </div>
  )
}

export default Footer