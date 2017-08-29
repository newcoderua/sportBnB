export const createReservation = (reservation) => {
  reservation.date = reservation.date.format()
  // debugger
  return ($.ajax({
    type: "POST",
    url: "api/reservations",
    data:  {reservation},
  }));
};

export const destroyReservation = (id) => {
  // debugger
  return ($.ajax({
    method: 'DELETE',
    url: `api/reservations/${id}`,
  }))
};

export const fetchReservations = () => (
  $.ajax({
    type: "GET",
    url: 'api/reservations',
  })
);
