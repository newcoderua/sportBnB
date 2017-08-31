import { connect } from 'react-redux';
import React from 'react';
import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchBuddies, createBuddy } from '../../actions/buddy_actions';
import { clearFilter } from '../../actions/filter_actions';
import BecomeBuddyForm from './become_buddy_form';

const mapStateToProps = (state) => {
  // debugger
  // so I need add selector when I can filter my buddies
  return {
  currentUser: state.session.currentUser,
  buddies: state.buddies,
  filters: state.filters,
}};

const mapDispatchToProps = dispatch => ({
  fetchBuddies: (filters) => dispatch(fetchBuddies(filters)),
  clearFilter: () => dispatch(clearFilter()),
  createBuddy: (buddy) => dispatch(createBuddy(buddy)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(BecomeBuddyForm);
