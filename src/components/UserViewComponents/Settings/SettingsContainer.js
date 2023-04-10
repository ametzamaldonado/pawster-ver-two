import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../context/AuthContext";

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
                <div>SettingsContainer</div>
                <button onClick={handleLogOut}>Logout</button>
            </div>
        </div>
    )
}

export default SettingsContainer