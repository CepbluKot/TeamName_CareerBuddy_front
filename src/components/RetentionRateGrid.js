// src/components/RetentionRateGrid.js
import React from 'react';

function RetentionRateGrid() {
    return (
        <div className="grid-container">
            {/* Пример: Настройте количество высоких, средних и низких элементов по мере необходимости */}
            {[...Array(50)].map((_, i) => (
                <div key={i} className="grid-item high"></div>
            ))}
            {[...Array(30)].map((_, i) => (
                <div key={i + 50} className="grid-item medium"></div>
            ))}
            {[...Array(20)].map((_, i) => (
                <div key={i + 80} className="grid-item low"></div>
            ))}
        </div>
    );
}

export default RetentionRateGrid;
