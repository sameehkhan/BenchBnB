import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

let _default = {session:[]};

const sessionErrorsReducer = (state = _default, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return _default;
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { session: action.errors});
    default:
      return state;
  }
};

export default sessionErrorsReducer;
