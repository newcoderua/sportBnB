import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutItem = ({ workout, deleteWorkout }) => {
  const handleDelete = () => deleteWorkout(workout.id);

  return (
    <div className="workouts-class">
      <li>

        <b>Sport :  </b>{workout.sport} <b> and user_id</b>{workout.user_id}<br />
        <b>Address :  </b>{workout.address}<br />
         <b>Date :  </b>{workout.date}<br />
         <b>Detauls :  </b>{workout.details}<br />
        <button onClick={handleDelete}>    Delete   </button><br /><br />
      </li>
    </div>
  );
};

export default WorkoutItem;
