import actionTypes from './actionTypes';

export const message = (message) => {
  return {
    type: actionTypes.MESSAGE,
    message
  }
}

export const errMsgReset = () => {
  return {
    type: actionTypes.ERR_MSG_RESET
  }
}