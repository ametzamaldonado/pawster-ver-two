import React from 'react';
import { profileInfo } from '../../data/data';
import ImagesDisplay from './ImagesDisplay';
import './ProfileContainer.css'

function ProfileContainer() {
    return (
        <div className='setting-profile-container'>
            <div className='default-column'>
                ProfileContainer
                <div className="gallery ">
                <ImagesDisplay images={profileInfo.image}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileContainer