import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../context/AuthContext";
import MentorForm from './MentorForm';
import UpdateProfilePic from './UpdateProfilePic';
import DeleteUserContainer from './DeleteUserContainer';
import "./SettingsContainer.scss";

function SettingsContainer() {
    const { logout, currentUser } = useAuth();
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
                <MentorForm currentUser={currentUser}/>
                <DeleteUserContainer currentUser={currentUser}/> 
            </div>
            
        </div>
    )
}

export default SettingsContainer