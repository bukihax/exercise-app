import React, { useState } from "react";

function RepetitionExercise({ name }) {

  // Step 1: create state to store repetition count
  const [count, setCount] = useState(0);

  // Step 2: function to increase count
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // Step 3: function to reset count
  const handleReset = () => {
    setCount(0);
  };

  // Step 4: render component
  return (
    <div>
      <h2>{name}</h2>

      <p>Repetitions: {count}</p>

      <button onClick={handleIncrease}>
        Add Rep
      </button>

      <button onClick={handleReset}>
        Reset
      </button>

    </div>
  );
}

export default RepetitionExercise;