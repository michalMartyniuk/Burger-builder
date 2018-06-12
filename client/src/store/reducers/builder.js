import actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: {
    salad: { quantity: 0, price: 0 },
    cheese: { quantity: 0, price: 0 },
    meat: { quantity: 0, price: 0 },
    bacon: { quantity: 0, price: 0 }
  },
  totalPrice: 0,
}

const builder = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: { 
            ...state.ingredients[action.ingredientType],
            quantity: state.ingredients[action.ingredientType].quantity + 1
          }
        },
        totalPrice: (state.totalPrice * 10 + state.ingredients[action.ingredientType].price * 10) / 10
      }
      break;

    case actionTypes.REMOVE:
      if(state.ingredients[action.ingredientType].quantity !== 0) {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.ingredientType]: {
              ...state.ingredients[action.ingredientType],
              quantity: state.ingredients[action.ingredientType].quantity - 1
            }
          },
          totalcPrice: (state.totalPrice * 10 - state.ingredients[action.ingredientType].price * 10) / 10
        }
      }
      break;

    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients
      }
      break;

    case actionTypes.SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.totalPrice
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

export default builder;