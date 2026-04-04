import React, { useState, useRef } from "react";

export default function RunningExercise({ name }) {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
  }

  function handleStartStop() {
    if (running) {
      clearInterval(intervalRef.current);
      setRunning(false);
    } else {
      startTimeRef.current = Date.now() - elapsed;
      intervalRef.current = setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 100);
      setRunning(true);
    }
  }

  function handleLap() {
    setLaps((prev) => [...prev, elapsed]);
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setRunning(false);
    setElapsed(0);
    setLaps([]);
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{formatTime(elapsed)}</p>
      <button onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
      <button onClick={handleLap} disabled={!running}>Record Lap</button>
      <button onClick={handleReset}>Reset</button>

      {laps.length > 0 && (
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
