import actionTypes from '../actions/actionTypes';

const initialState = {
  message: null,
  error: null
}

const appReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.ERR_MSG_RESET:
      return {
        ...state,
        message: null,
        error: null
      }
      break;
    case actionTypes.MESSAGE:
      return {
        ...state,
        message: action.message
      }
      break;
    default: return state;
  }
}

export default appReducer;