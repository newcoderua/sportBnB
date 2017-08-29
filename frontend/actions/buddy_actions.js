import * as BuddyAPIUtil from '../util/buddies_util';

export const RECEIVE_BUDDIES = "RECEIVE_BUDDIES";
export const RECEIVE_BUDDY = "RECEIVE_BUDDY";

export const receiveAllBuddies = (buddies) => ({
  type: RECEIVE_BUDDIES,
  buddies
});

export const receiveBuddy = (buddy) => ({
  type: RECEIVE_BUDDY,
  buddy
})
// maybe I will need some current Buddy
export const fetchBuddies = (filters) => dispatch => (
  BuddyAPIUtil.fetchBuddies(filters)
    .then((buddies) => (
      dispatch(receiveAllBuddies(buddies))
    ))
);

export const fetchBuddy = id => dispatch => (
  BuddyAPIUtil.fetchBuddy(id)
      .then((buddy) => (
        dispatch(receiveBuddy(buddy))
      ))
);
