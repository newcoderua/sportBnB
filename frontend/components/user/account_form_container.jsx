import { connect } from 'react-redux';
import React from 'react';
import AccountForm from './account_form';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  // debugger
  return {
  currentUser: session.currentUser
}};

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm);
