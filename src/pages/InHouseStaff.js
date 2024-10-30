// src/pages/InHouseStaff.js
import React from 'react';
import './InHouseStaff.css';

const InHouseStaff = () => {
  return (
    <div className="page">
      <nav className="navbar">
        <button className="nav-button">Main</button>
        <button className="nav-button active">Employees</button>
        <button className="nav-button">My Profile</button>
      </nav>
      <h1 className="title">In-house staff</h1>
      <div className="staff-list">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="staff-item-placeholder"></div>
        ))}
      </div>
    </div>
  );
};

export default InHouseStaff;
