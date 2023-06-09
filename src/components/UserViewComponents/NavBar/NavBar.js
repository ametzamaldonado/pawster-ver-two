import './NavBar.scss'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

function NavScrollExample() {
    const { currentUser } = useAuth();

    let currentPath = window.location.pathname
    return (
        <div className='container-Navbar' >
            {
                currentPath !== '/home' ? // changed from "/"
                (   
                    <Link to='/home'>
                        <button className='no_buttonStyling round_styling navBar-button'>
                        <i className="bi bi-caret-left"></i> 
                    </button>
                    </Link>
                )
                : null
            }
            
            <div className="navBar-profile">
                <Link to='/home/profile'>
                    <img
                        alt=""
                        src={currentUser.photoURL}
                        className="round_styling profile_img"
                    />
                    <span style={{ display: 'inline-block', paddingLeft: '5px', fontWeight: '500' }}>
                        {' '} My Profile
                    </span>
                </Link>
            </div>
            <Link to='/home/settings'>
                <button type='submit' className='no_buttonStyling round_styling navBar-button'>
                <i className="bi bi-gear"></i>
            </button>
            </Link>
            

        </div>
    )
}

export default NavScrollExample;
