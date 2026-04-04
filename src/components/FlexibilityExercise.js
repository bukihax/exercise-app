import React, { useState } from 'react';

function FlexibilityExercise() {
  const [stretches, setStretches] = useState(0);

  return (
    <div>
      <h2>Flexibility Exercise</h2>
      <p>Stretches done: {stretches}</p>
      <button onClick={() => setStretches(stretches + 1)}>Add Stretch</button>
      <button onClick={() => setStretches(0)}>Reset</button>
    </div>
  );
}

export default FlexibilityExercise;