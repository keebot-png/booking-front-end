import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className="navigation">
    <div className="material-symbols-outlined mobile-nav">menu</div>
    <div className="sidebar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/my-bookings">My Bookings</NavLink></li>
        <li><NavLink to="/booking-form">Booking Form</NavLink></li>
        <li><NavLink to="/teachers">Teachers</NavLink></li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
