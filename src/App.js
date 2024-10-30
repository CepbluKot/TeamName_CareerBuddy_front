// src/App.js
import React from 'react';
import Navbar from './components/Navbar.js';
import RetentionRateGrid from './components/RetentionRateGrid.js';
import Legend from './components/Legend.js';
import StaffSection from './components/StaffSection.js';
import MyProfile from './pages/MyProfile';
import './App.css';

function App() {
    return (
        <div>
            <Navbar />
            <div className="dashboard-container">
                <div className="title">Dashboard</div>
                <RetentionRateGrid />
                <Legend />
                <StaffSection />
                <MyProfile />
            </div>
        </div>
    );
}

export default App;
