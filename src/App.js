import React, { useState } from "react";

import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

export default function App() {

  // stores which exercise is selected
  const [selectedExercise, setSelectedExercise] = useState(null);

  // list of exercises
  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Sit Ups", type: "repetition" },
    { name: "Running", type: "running" },
    { name: "Plank", type: "duration" }
  ];

  // MENU SCREEN
  if (selectedExercise === null) {
    return (
      <div>
        <h1>Exercise Tracker</h1>

        {exercises.map((exercise) => (
          <button
            key={exercise.name}
            onClick={() => setSelectedExercise(exercise)}
          >
            {exercise.name}
          </button>
        ))}

      </div>
    );
  }

  // EXERCISE SCREEN
  return (
    <div>

      <button onClick={() => setSelectedExercise(null)}>
        Back to Menu
      </button>

      {selectedExercise.type === "repetition" ? (
        <RepetitionExercise name={selectedExercise.name} />
      ) : selectedExercise.type === "running" ? (
        <RunningExercise name={selectedExercise.name} />
      ) : (
        <DurationExercise name={selectedExercise.name} />
      )}

    </div>
  );
}