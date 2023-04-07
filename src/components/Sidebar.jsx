import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const [navImage, setNavImage] = useState('menu');

  const handleNav = () => {
    setNav(!nav);
    if (nav === false) {
      setNavImage('close');
    } else {
      setNavImage('menu');
    }
  };

  return (
    <div className="navigation">
      <div className="mobile-menu-container">
        <div className="mobile_logo-nav">
          <div className="material-symbols-outlined">menu_book</div>
          <button type="button" className="material-symbols-outlined mobile-nav" onClick={handleNav}>{navImage}</button>
        </div>
        {nav
          ? (
            <div className="mobile-menu-nav">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/my-bookings">My Bookings</NavLink></li>
              <li><NavLink to="/booking-form">Booking Form</NavLink></li>
            </div>
          ) : ''}
      </div>
      <div className="sidebar">
        <div>
          <span className="material-symbols-outlined logo">menu_book</span>
        </div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/my-bookings">My Bookings</NavLink></li>
          <li><NavLink to="/booking-form">Booking Form</NavLink></li>
          <li><NavLink to="/teachers">Teachers</NavLink></li>
        </ul>
        <div className="sidebar-footer">
          <div className="social-media">
            <a href="link.com"><img src={facebook} alt="facebook icon" /></a>
            <a href="link.com"><img src={instagram} alt="instagram icon" /></a>
            <a href="link.com"><img src={linkedin} alt="linkedin icon" /></a>
            <a href="link.com"><img src={twitter} alt="twitter icon" /></a>
          </div>
          <div><small>© 2023 Bookings. All rights reserved.</small></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
