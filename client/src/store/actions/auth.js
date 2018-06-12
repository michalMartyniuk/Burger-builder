import actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const signUp = (userId, token) => {
  localStorage.setItem('token', token)
  localStorage.setItem('userId', userId)
  return {
    type: actionTypes.SIGN_UP,
    message: "Account created successfully.",
    userId,
    token
  }
}

export const signUpError = error => {
  return {
    type: actionTypes.SIGN_UP_ERROR,
    error
  }
}

export const initSignUp = (email, password) => {
  const signUpData = {
    email,
    password,
    returnSecureToken: true
  } 
  return dispatch => {
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCKmsTroovxC3gxZu8Q9o51rz9ULIFYaqw', signUpData)
      .then( response => {
        dispatch( signUp(response.data.localId, response.data.idToken))
      })
      .catch( error => dispatch( signUpError(error.response.data.error.message)) )
  }
}

export const LogIn = (userId, token) => {
  localStorage.setItem('token', token)
  localStorage.setItem('userId', userId)
  return {
    type: actionTypes.LOG_IN,
    message: "Successfully logged in.",
    token,
    userId
  }
}

export const LogInError = error => {
  return {
    type: actionTypes.LOG_IN_ERROR,
    error
  }
}

export const initLogIn = (email, password) => {
  if(!localStorage.getItem('token')){
    const logInData = {
    email,
    password,
    returnSecureToken: true
    } 
    return dispatch => {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCKmsTroovxC3gxZu8Q9o51rz9ULIFYaqw', logInData)
        .then( response => {
          dispatch( LogIn(response.data.localId, response.data.idToken) )
        })
        .catch( error => dispatch( LogInError(error.response.data.error.message) ))
    }
  }
  else {
    return dispatch => dispatch( LogInError("You are already logged in") )
  }
}

export const logOut = () => {
  if(localStorage.getItem('token')) {
    localStorage.clear();
    return {
      type: actionTypes.LOG_OUT,
      message: 'You are logged out.'
    }
  }
  return {
    type: actionTypes.LOG_OUT_ERROR,
  };
}

