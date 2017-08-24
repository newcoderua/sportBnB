import { connect } from 'react-redux';
import React from 'react';
import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchBuddies } from '../../actions/buddy_actions';
import BuddiesForm from './buddies_form';

const mapStateToProps = (state) => {
  // debugger
  return {
  currentUser: state.session.currentUser,
  buddies: state.buddies
}};

const mapDispatchToProps = dispatch => ({
  fetchBuddies: () => dispatch(fetchBuddies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuddiesForm);
