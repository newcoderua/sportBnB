import { connect } from "react-redux";
import { updateFilter } from '../../actions/filter_actions';
import { pickAllBuddies } from '../../reducers/selectors';

import Search from './search_form';

const mapStateToProps = state => {
  return ({
    buddies: pickAllBuddies(state),
    sport: state.filters.sport,
    minRate: state.filters.minRate,
    maxRate: state.filters.maxRate,
    zip: state.filters.zip,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
