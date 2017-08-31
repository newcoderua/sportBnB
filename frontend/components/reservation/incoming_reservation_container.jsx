import { connect } from 'react-redux';
import IncomingReservationForm from './incoming_reservation_form';
import { fetchBuddies, fetchBuddy } from '../../actions/buddy_actions';
import { createReservation, fetchReservations } from '../../actions/reservation_actions';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = state => {
  // debugger
  return {
    currentUser: state.session.currentUser,
    reservations: state.reservations,
    buddies: state.buddies,
    filters: state.filters,
    users: state.users
  };
}

const mapDispatchToProps = dispatch => ({
  createReservation: reservation => dispatch(createReservation(reservation)),
  fetchBuddies: filters => dispatch(fetchBuddies(filters)),
  fetchReservations: () => dispatch(fetchReservations()),
  fetchBuddy: id => dispatch(fetchBuddy(id)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomingReservationForm);
