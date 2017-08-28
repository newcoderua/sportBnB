import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutItem = ({ workout, deleteWorkout }) => {
  const handleDelete = () => deleteWorkout(workout.id);
  // debugger
  let r = "pending";
    if (workout.completed) {
      r = "done"
    }
  return (
    <div className="workouts-class">
      <li>

        <b>Sport :  </b>{workout.sport} <b> and user_id</b>{workout.user_id}<br />
        <b>Address :  </b>{workout.address}<br />
         <b>Date :  </b>{workout.date}<br />
         <b>Details :  </b>{workout.details}<br />
         <b>Completed : </b>{r}<br />
        <button onClick={handleDelete}>    Delete   </button><br /><br />
      </li>
    </div>
  );
};

export default WorkoutItem;
