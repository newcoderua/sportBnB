import * as BuddyAPIUtil from '../util/buddies_util';

export const RECEIVE_BUDDIES = "RECEIVE_BUDDIES";

export const receiveAllBuddies = (buddies) => ({
  type: RECEIVE_BUDDIES,
  buddies
});

export const fetchBuddies = (filters) => dispatch => (
  BuddyAPIUtil.fetchBuddies(filters)
    .then((buddies) => (
      dispatch(receiveAllBuddies(buddies))
    ))
);
