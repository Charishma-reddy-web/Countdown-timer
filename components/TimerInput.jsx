import React from 'react';

const TimerInput = ({ value, onChange, label, max = 59 }) => {
    const handleChange = (e) => {
        let val = parseInt(e.target.value, 10);
        if (isNaN(val)) val = 0;
        // Allow user to clear input temporarily or type
        updateValue(val);
    };

    const updateValue = (val) => {
        if (val < 0) val = 0;
        if (val > max) val = max;
        onChange(val);
    };

    const increment = () => updateValue(value + 1);
    const decrement = () => updateValue(value - 1);

    // Format display value to always be 2 digits
    const displayValue = value.toString().padStart(2, '0');

    return (
        <div className="timer-input-group">
            <div className="input-wrapper">
                <input
                    type="text"
                    value={displayValue}
                    onChange={handleChange}
                    className="timer-input"
                    inputMode="numeric"
                />
                <div className="input-controls">
                    <button onClick={increment} className="control-btn up" aria-label="Increase">
                        ▲
                    </button>
                    <button onClick={decrement} className="control-btn down" aria-label="Decrease">
                        ▼
                    </button>
                </div>
            </div>
            <span className="timer-label">{label}</span>
        </div>
    );
};

export default TimerInput;
