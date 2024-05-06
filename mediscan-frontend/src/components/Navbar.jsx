import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for routing
import './styles/Navbar.css'; // Importing the CSS file
import { getToken, removeToken } from '../services/localStorage';
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../features/user/authSlice';


const NavbarComponent = () => {
  const dispatch = useDispatch();
  const {user_type} = getToken()
  const handleLogout=()=>{
    dispatch(unSetUserToken({access_token:null}))
    removeToken()
   
    navigate('/login');
  }
  const { username } = getToken(); 
  return (
    <nav className="navbar">
      <div className="nav-title">MediScan</div>
      <div className="nav-links">
      {user_type === 'pharmacy' ? (
          <>
            <Link to="/medicines">Medicines</Link>
            <Link to="/add-medicine">Add Medicine</Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/contact">Contact Us</Link>
          </>
        )}
      </div>
      <div className="btn-log">
        {username ? (
          <Link onClick={handleLogout}>Logout</Link>
        ) : (
          <Link to="/login">Login/Signup</Link>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
