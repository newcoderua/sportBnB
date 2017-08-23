import { connect } from 'react-redux';
import React from 'react';
import { fetchBuddies } from '../../actions/session_actions';
import BuddiesForm from './buddies_form';

const mapStateToProps = (state) => ({
  buddies
});

const mapDispatchToProps = dispatch => ({
  fetchBuddies: () => dispatch(fetchBuddies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuddiesForm);
