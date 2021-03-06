import { connect } from "react-redux";
import { updateFilter } from '../../actions/filter_actions';
import { fetchBuddies } from '../../actions/buddy_actions';
// import { pickAllBuddies } from '../../reducers/selectors';
import {withRouter} from 'react-router-dom';
import SearchForm from './search_form';

const mapStateToProps = state => {
  // debugger
  return ({
    buddies: Object.keys(state.buddies),
    sport: state.filters.sport,
    minRate: state.filters.minRate,
    maxRate: state.filters.maxRate,
    zip: state.filters.zip,
  });
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm))
;
