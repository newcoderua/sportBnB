import * as BuddyAPIUtil from '../util/buddies_util';

export const RECEIVE_BUDDIES = "RECEIVE_BUDDIES";

export const receiveAllBuddies = (buddies) => ({
  type: RECEIVE_BUDDIES,
  buddies
});

export const fetchBuddies = () => dispatch => (
  BuddyAPIUtil.fetchBuddies()
    .then((buddies) => (
      dispatch(receiveAllBuddies(buddies))
    ))
);
