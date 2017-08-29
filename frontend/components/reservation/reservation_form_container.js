import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import { fetchBuddies } from '../../actions/buddy_actions';
import { createReservation } from '../../actions/reservation_actions';

const mapStateToProps = state => {
  // debugger
  return {
    currentUser: state.session.currentUser,
    reservations: state.reservations,
    buddies: state.buddies,
    filters: state.filters,
  };
}

const mapDispatchToProps = dispatch => ({
  createReservation: reservation => dispatch(createReservation(reservation)),
  fetchBuddies: filters => dispatch(fetchBuddies(filters)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
