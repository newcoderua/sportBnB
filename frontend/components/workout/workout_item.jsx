import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutItem = ({ workout, deleteWorkout }) => {
  const handleDelete = () => deleteWorkout(workout.id);

  return (
    <div className="workouts-class">
      <li>
        <h2>{workout.id}</h2>
        <h2>{workout.sport}</h2>
        <h2>{workout.address}</h2>
        <h2>{workout.date}</h2>
        <h3>{workout.details}</h3>
        <button onClick={handleDelete}>    Delete    </button>
      </li>
    </div>
  );
};

export default WorkoutItem;
