import actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const add = (ingType) => {
  return {
    type: actionTypes.ADD,
    ingredientType: ingType,
    formData: null
  }
}

export const remove = (ingType) => {
  return {
    type: actionTypes.REMOVE,
    ingredientType: ingType
  }
}

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  }
}

export const setTotalPrice = totalPrice => {
  return {
    type: actionTypes.SET_TOTAL_PRICE,
    totalPrice
  }
}

export const initIngredients = () => {
  return dispatch => {
    axios.get('https://burger-builder-4872a.firebaseio.com/ingredients.json')
      .then( response => {
        dispatch(setIngredients(response.data));
      })
      .catch( error => console.log(error))
  }
}

export const initTotalPrice = () => {
  return dispatch => {
    axios.get('https://burger-builder-4872a.firebaseio.com/totalPrice.json')
      .then( response => {
        dispatch(setTotalPrice(response.data));
      })
      .catch( error => console.log(error))
  }
}