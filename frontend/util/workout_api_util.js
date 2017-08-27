export const createWorkout = (workout) => (
  $.ajax({
    type: "POST",
    url: "api/workouts",
    data:  {workout},
  })
);

export const destroyWorkout = (id) => {
  debugger
  return ($.ajax({
    method: 'DELETE',
    url: `api/workouts/${id}`,
  }))
};

export const fetchWorkouts = () => (
  $.ajax({
    type: "GET",
    url: 'api/workouts',
  })
);

// export const fetchWorkout = (id, success) => {
//   $.ajax({
//     type: "GET",
//     url: `api/workouts/${id}`,
//     success
//   })
// }
