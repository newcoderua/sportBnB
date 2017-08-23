import { connect } from 'react-redux';
import React from 'react';
import { getAllChefs } from '../../actions/search_actions';
import SearchForm from './search_form';

const mapStateToProps = ( state ) => ({
  buddies
});

const mapDispatchToProps = dispatch => ({
  searchBuddies: () => dispatch(searchBuddies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
