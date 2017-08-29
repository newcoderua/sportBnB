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

        <b>Sport :  </b>{workout.sport}<br />
        <b>Address :  </b>{workout.address}<br />
         <b>Date :  </b>{workout.date}<br /><br />
         <b>Details :  </b>{workout.details}<br />
         <b>Status of request : </b>{r}<br />
        <button className="button-delete-workouts" onClick={handleDelete}>    Delete   </button><br /><br />
      </li>
    </div>
  );
};

export default WorkoutItem;
