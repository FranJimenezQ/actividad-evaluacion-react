import { NavLink } from 'react-router-dom';
import './Navbar.css'
function Navbar({ handleGetAllProfiles }) {
  const handleIconClick = () => {
    console.log('icon')
    handleGetAllProfiles();
  };
    return (
      <nav className="navbar bg-dark shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="container-fluid">
            <div className='navTitle' onClick={handleIconClick}>
            <NavLink className="nav-title" to="/">All your pics!</NavLink>
            </div>
          <div className="nav-icon">
            <button className='btn btn-dark'>
              <NavLink className="nav-color" to="/profile">Profile</NavLink>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge-fill" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
            </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;