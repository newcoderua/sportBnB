import { connect } from 'react-redux';
import React from 'react';
import AccountForm from './account_form';

const mapStateToProps = ({ session }) => {
  // debugger
  return {
  currentUser: session.currentUser
}};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm);
