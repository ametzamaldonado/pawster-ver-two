import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../context/AuthContext";
import MentorForm from './MentorForm';
import "./SettingsContainer.scss";


import UpdateProfilePic from './UpdateProfilePic';
import DeleteUserContainer from './DeleteUserContainer';

function SettingsContainer() {
    const { logout, currentUser, userProfileFormValues } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logout();
            navigate('/login');
            console.log(currentUser)
        } catch (err){
            console.log(err)
        }
    }

 

    return (
        <div className='setting-profile-container'>
            <div className='default-column'>
                <UpdateProfilePic handleLogOut={handleLogOut}/>
                

                
                <MentorForm userProfileFormValues={userProfileFormValues} currentUser={currentUser}/>

                <DeleteUserContainer currentUser={currentUser}/> 
            </div>
            
        </div>
    )
}

export default SettingsContainer