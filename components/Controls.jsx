import React from 'react';

const Controls = ({ isRunning, onStart, onPause, onReset, isFinished }) => {
    return (
        <div className="controls">
            {!isRunning && !isFinished && (
                <button onClick={onStart} className="btn btn-start">
                    Start
                </button>
            )}
            {isRunning && (
                <button onClick={onPause} className="btn btn-pause">
                    Pause
                </button>
            )}
            <button onClick={onReset} className="btn btn-reset">
                Reset
            </button>
        </div>
    );
};

export default Controls;
