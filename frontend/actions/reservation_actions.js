import * as ReservationAPIUtil from '../util/reservation_api_util';


export const FETCH_RESERVATIONS = "FETCH_RESERVATIONS";
export const DELETE_RESERVATION = "DELETE_RESERVATION";
export const CREATE_RESERVATION = "CREATE_RESERVATION";

const receiveReservations = (reservations) => ({
  type: FETCH_RESERVATIONS,
  reservations
});

const destroyReservation = reservation => ({
  type: DELETE_RESERVATION,
  reservation
});

const postReservation = (reservation) => ({
  type: CREATE_RESERVATION,
  reservation
})

export const fetchReservations = () => dispatch => {
  // debugger
  return (ReservationAPIUtil.fetchReservations()
      .then((reservations) => dispatch(receiveReservations(reservations))))
};

export const createReservation = (reservation) => dispatch => (
  ReservationAPIUtil.createReservation(reservation)
      .then((new_reservation) => dispatch(postReservation(new_reservation)))
);


export const deleteReservation = (id) => dispatch => (
  ReservationAPIUtil.destroyReservation(id)
      .then(reservation => dispatch(destroyReservation(reservation)))
);
