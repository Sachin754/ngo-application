import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { BrowserRouter as Router,  Route,Routes,Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
    <div className="logo">
    <img src={process.env.PUBLIC_URL + 'ngologo.jpeg'} alt="Logo" />
    <span className="name">Crowd Funding Platform</span>

    </div>
    <nav className="navigation">
      <ul className="menu">
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/create-campaign">CREATE CAMPAIGN</Link></li>
          <li><Link to="/active-campaign">ACTIVE CAMPAIGN</Link></li>
          <li><Link to="/register">REGISTER</Link></li>
      </ul>
    </nav>
    <div className="donate-btn">
    <Link to="/donate" className="donate-link">Donate now!</Link>
    </div>
  </header>
  
  );
};

export default Header;
