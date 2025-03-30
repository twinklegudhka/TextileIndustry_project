import React from 'react';
import './Navbar.css'

const Navbar = () => {
  const userName = "John Doe";
  const userImage = "/assets/images/customers/profile_photo.jpg";
  return (
    <header className="navbar">
    <div className="navbar-left">
      <h2 className="logo">Textile Industry</h2>
    </div>
    <div className="navbar-right">
      <div className="user-profile">
        <img src={userImage} alt="User Profile" className="profile-image" />
        <span className="user-name">{userName}</span>
      </div>
    </div>
  </header>
  )
}

export default Navbar
