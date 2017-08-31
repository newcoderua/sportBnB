import { connect } from 'react-redux';
import React from 'react';
import AccountForm from './account_form';
import { updateUser } from '../../actions/session_actions';
import { fetchBuddy, updateBuddy } from '../../actions/buddy_actions';

const mapStateToProps = ({ session }) => {
  // debugger
  return {
  currentUser: session.currentUser
}};

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  fetchBuddy: id => dispatch(fetchBuddy(id)),
  updateBuddy: (buddy) => dispatch(updateBuddy(buddy)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm);
