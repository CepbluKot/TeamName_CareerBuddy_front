// src/components/ProfileInfo.js
import React from 'react';

const ProfileInfo = ({ name, title, warning }) => {
    return (
        <div className="profile-info">
            <h2>{name}</h2>
            <p>{title}</p>
            {warning && <button className="warning-button">{warning}</button>}
        </div>
    );
};

export default ProfileInfo;
