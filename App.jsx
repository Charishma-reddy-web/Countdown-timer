import { useState, useEffect } from 'react'
import TimerInput from './components/TimerInput'
import TimerDisplay from './components/TimerDisplay'
import Controls from './components/Controls'
import './App.css'

function App() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const [timeLeft, setTimeLeft] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isInputting, setIsInputting] = useState(true)

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      // Optional: Play sound or alert
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    if (isInputting) {
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      if (totalSeconds > 0) {
        setTimeLeft(totalSeconds);
        setIsInputting(false);
        setIsActive(true);
      }
    } else {
      setIsActive(true);
    }
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsInputting(true);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="app-container">
      <h1>Countdown Timer</h1>
      <div className="timer-card">
        {isInputting ? (
          <div className="input-group-container">
            <TimerInput value={hours} onChange={setHours} label="Hours" max={99} />
            <span className="colon">:</span>
            <TimerInput value={minutes} onChange={setMinutes} label="Minutes" />
            <span className="colon">:</span>
            <TimerInput value={seconds} onChange={setSeconds} label="Seconds" />
          </div>
        ) : (
          <TimerDisplay totalSeconds={timeLeft} />
        )}

        <Controls
          isRunning={isActive}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
          isFinished={!isInputting && timeLeft === 0}
        />
      </div>
    </div>
  )
}

export default App
