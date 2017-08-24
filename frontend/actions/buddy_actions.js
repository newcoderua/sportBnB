import * as BuddyAPIUtil from '../util/buddies_util';

export const RECEIVE_BUDDIES = "RECEIVE_BUDDIES";

export const receiveAllBuddies = () => ({
  type: RECEIVE_BUDDIES
});

export const fetchBuddies = () => dispatch => (
  BuddyAPIUtil.fetchBuddies()
    .then(() => (
      dispatch(receiveAllBuddies())
    ))
);
