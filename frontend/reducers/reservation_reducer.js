import { merge } from 'lodash';
import { FETCH_RESERVATIONS,
         DELETE_RESERVATION,
         CREATE_RESERVATION } from '../actions/reservation_actions';

const ReservationReducer = (state = {}, action) => {
 Object.freeze(state);
 switch(action.type){

   case CREATE_RESERVATION:
     const new_reservation = { [action.reservation.id]: action.reservation };
     return merge({}, state, new_reservation);

   case FETCH_RESERVATIONS:
     // debugger
     return action.reservations;

   case DELETE_RESERVATION:
   // debugger
     let newState = merge({}, state);
     delete newState[action.reservation.id];
     return newState;

   default:
     return state;
 }
}

export default ReservationReducer;
