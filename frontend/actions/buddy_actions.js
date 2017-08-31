import * as BuddyAPIUtil from '../util/buddies_util';

export const RECEIVE_BUDDIES = "RECEIVE_BUDDIES";
export const RECEIVE_BUDDY = "RECEIVE_BUDDY";
export const POST_BUDDY = "POST_BUDDY";
export const UPDATE_BUDDY = "UPDATE_BUDDY";

export const receiveAllBuddies = (buddies) => ({
  type: RECEIVE_BUDDIES,
  buddies
});

export const receiveBuddy = (buddy) => ({
  type: RECEIVE_BUDDY,
  buddy
});

export const updateCurrBuddy = (id) => ({
  type: UPDATE_BUDDY,
  id
});

export const postBuddy = (buddy) => ({
  type: POST_BUDDY,
  buddy
});

export const updateBuddy = (buddy) => dispatch => (
  BuddyAPIUtil.updateCurrBuddy(buddy)
    .then((buddy) => (
      dispatch(updateCurrBuddy(buddy))
    ))
)
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

export const createBuddy = buddy => dispatch => (
  BuddyAPIUtil.createBuddy(buddy)
    .then((new_buddy) => (
      dispatch(postBuddy(new_buddy))
    ))
)
