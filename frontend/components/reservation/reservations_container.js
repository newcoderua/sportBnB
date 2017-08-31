import { connect } from 'react-redux';
import React from 'react';
import ReservationsIndex from './reservations_index';
import { deleteReservation, fetchReservations, createReservation } from '../../actions/reservation_actions';
import { fetchBuddies } from '../../actions/buddy_actions';

const mapStateToProps = (state) => {
  // debugger
  return {
  reservations: state.reservations,
  buddies: state.buddies,
  filters: state.filters,
  currentUser: state.session.currentUser
}};

const mapDispatchToProps = dispatch => ({
  deleteReservation: id => dispatch(deleteReservation(id)),
  fetchReservations: () => dispatch(fetchReservations()),
  createReservation: (workout) => dispatch(createReservation(workout)),
  fetchBuddies: (filters) => dispatch(fetchBuddies(filters)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationsIndex);
