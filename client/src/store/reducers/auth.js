import actionTypes from '../actions/actionTypes';

const initialState = {
  userId: null,
  token: null,
  error: null,
  message: null
}

const auth = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.SIGN_UP:
      return {
        ...state,
        message: action.message,
        userId: action.userId,
        token: action.token,
      }
      break;
    case actionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        error: action.error
      }
      break;
    case actionTypes.LOG_IN:
      return {
        ...state,
        userId: action.userId,
        token: action.token,
        message: action.message,
      }
      break;
    case actionTypes.LOG_IN_ERROR:
      return {
        ...state,
        error: action.error
      }
      break;    
    case actionTypes.LOG_OUT:
      return {
        ...state,
        message: action.message
      }
    case actionTypes.LOG_OUT_ERROR:
      return {
        ...state
      }
      break;
    case actionTypes.ERR_MSG_RESET:
      return {
        ...state,
        message: null,
        error: null
      }
      break;
    default: return state;
  }
}

export default auth;