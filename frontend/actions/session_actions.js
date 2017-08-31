import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveUsers = () => ({
  type: RECEIVE_ALL_USERS,
})

export const fetchUsers = () => dispatch => {
  // debugger
  return APIUtil.fetchUsers()
    .then(users => (
      dispatch(receiveUsers(users))
    ))
};


// export const updateCurrUserImage = (buddy_id)

export const updateUser = user => dispatch => (
  APIUtil.update(user)
    .then(user => (
      dispatch(receiveCurrentUser(user))
  ))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(user => (
      dispatch(receiveCurrentUser(null))
    ))
  );
