import React from 'react';

const TimerDisplay = ({ totalSeconds }) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const format = (num) => num.toString().padStart(2, '0');

    return (
        <div className="timer-display">
            <div className="time-unit">
                <span className="time-value">{format(hours)}</span>
                <span className="unit-label">Hours</span>
            </div>
            <span className="separator">:</span>
            <div className="time-unit">
                <span className="time-value">{format(minutes)}</span>
                <span className="unit-label">Minutes</span>
            </div>
            <span className="separator">:</span>
            <div className="time-unit">
                <span className="time-value">{format(seconds)}</span>
                <span className="unit-label">Seconds</span>
            </div>
        </div>
    );
};

export default TimerDisplay;
