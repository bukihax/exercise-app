import React, { useEffect, useState } from "react";

function pad2(n) {
  return String(n).padStart(2, "0");
}

export default function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formattedTime = `${pad2(minutes)}:${pad2(secs)}`;

  const handleStartStop = () => {
    setRunning((prev) => !prev);
  };

  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h2>{name}</h2>

      <p style={{ fontSize: "32px" }}>{formattedTime}</p>

      <button onClick={handleStartStop}>
        {running ? "Stop" : "Start"}
      </button>

      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}