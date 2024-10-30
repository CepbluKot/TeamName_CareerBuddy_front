// src/pages/MyProfile.js
import React from 'react';
import './MyProfile.css';
import ProfileImage from '../components/ProfileImage.js'; // Импортируем компонент изображения
import ProfileInfo from '../components/ProfileInfo,.js';
import CareerGoals from '../components/CareerGoals.js';
import Surveys from '../components/Surveys.js';

const MyProfile = () => {
    return (
        <div className="page">
            <div className="profile-container">
                <div className="profile-section">
                <ProfileImage />
                    <ProfileInfo 
                        name="Maria Abrosova" 
                        title="Lead Python Developer" 
                        warning="High chance of quitting" 
                    />
                </div>
                <CareerGoals />
                <Surveys />
            </div>
        </div>
    );
};

export default MyProfile;
