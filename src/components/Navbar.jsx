import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="school-logo">School Logo</div>
        <h1 className="school-name">School Name</h1>
      </div>
      <div className="navbar-right">
        <span className="user-name">Admin User</span>
        <button className="nav-btn settings-btn" title="Settings">
          <i className="settings-icon">⚙</i>
        </button>
        <button className="nav-btn logout-btn" onClick={handleLogout} title="Logout">
          <i className="logout-icon">⊗</i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;