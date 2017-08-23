import * as SearchAPIUtil from '../util/search_util';

export const RECEIVE_BUDDIES = 'RECEIVE_BUDDIES';

export const receiveBuddies = () => ({
  type: RECEIVE_BUDDIES
});

export const searchBuddies = () => dispatch => (
  SearchAPIUtil.searchBuddies()
    .then(() => (
      dispatch(receiveBuddies(user))
    )
));
