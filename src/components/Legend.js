// src/components/Legend.js
import React from 'react';
import './Legend.css'; // Импортируем CSS файл

function Legend() {
    return (
        <div className="legend">
            <div className="legend-title">Retention rate</div>
            <div className="legend-item">
                <div className="legend-color high"></div>High
            </div>
            <div className="legend-item">
                <div className="legend-color medium"></div>Medium
            </div>
            <div className="legend-item">
                <div className="legend-color low"></div>Low
            </div>
        </div>
    );
}

export default Legend;
