import merge from 'lodash/merge';

import { UPDATE_FILTER } from '../actions/filter_actions';
//?? up
const _defaultFilters = Object.freeze({
  sport: 0,
  minRate: 0,
  maxRate: 10000000,
  zip: 0
});

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state)

  let newState;
  switch (action.type) {
    case UPDATE_FILTER:
      newState = { [action.filter] : action.value };
      return merge({}, state, newState);
    default:
      return state;
  }
};


export default FiltersReducer;
