import actionTypes from '../actions/actionTypes';

const initialState = {
  error: null,
  message: null,
  orderId: null
}

const order = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.ORDER:
      return {
        ...state,
        orderId: action.orderId,
        message: action.message
      }
      break;

    case actionTypes.ORDER_ERROR:
      return {
        ...state,
        error: action.error
      }

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

export default order;