export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as APIUtil from '../util/session_api_util';


export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


export const login = user => (dispatch) => (
  APIUtil.postSession(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const logout = () => (dispatch) => (
  APIUtil.deleteSession()
    .then(currentUser => dispatch(logoutCurrentUser()))
);

export const signup = user => (dispatch) => (
  APIUtil.postUser(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)))
);
