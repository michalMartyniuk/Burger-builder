import actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const order = orderId => {
  return {
    type: actionTypes.ORDER,
    orderId,
    message: `Order id: ${orderId} created!`
  }
}

export const orderError = error => {
  return {
    type: actionTypes.ORDER_ERROR,
    error
  }
}

export const initOrder = orderData => {
  return dispatch => {
    axios.post('https://burger-builder-4872a.firebaseio.com/orders.json', orderData)
      .then(response => {
        dispatch(order(response.data.name))
      })
      .catch( error => dispatch( orderError(error.response.data.error.message) ))
  }
}


