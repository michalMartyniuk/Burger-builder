import React, { Component } from 'react';
import styles from './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Switch, Redirect } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Login from './containers/Forms/Form-log-in/Form-log-in';
import Signup from './containers/Forms/Form-sign-up/Form-sign-up';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Modal from './components/UI/Modal/Modal';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Aux from './hoc/Aux';
import { errMsgReset } from './store/actions/app';
import { initLogIn, initSignUp, initLogOut } from './store/actions/auth';
import Orders from './containers/Orders/Orders';
import Navigation from './components/UI/Navigation/Navigation';
import Sidedrawer from './components/UI/Sidedrawer/Sidedrawer';
import LoginModal from './containers/Forms/Login-modal/Login-modal';
import SignupModal from './containers/Forms/Singup-modal/Signup-modal';

import axios from 'axios';


class App extends Component {

  state = {
    backdropState: false,
    modalState: false,
    sidedrawerState: false,
    loginModalState: false,
    signupModalState: false
  }

  componentDidMount() {
    if(!localStorage.getItem('userId')) {
      axios.get('/api/user').then((res) => {
        if(res.data) {
          this.props.initLogIn(res.data.email, res.data.password)
        }
      })
    }
  }

  backdropClick = () => {
    this.props.errMsgReset()
    this.setState({
      backdropState: false,
      sidedrawerState: false,
      loginModalState: false,
      signupModalState: false
    })
  }

  toggleSidedrawer = () => {
    this.setState({
      sidedrawerState: !this.state.sidedrawerState,
      backdropState: !this.state.backdropState
    })
  }

  modalTitle = () => {
    if(this.props.error) return 'Error'
  }

  modalText = () => {
    if(this.props.message) return this.props.message
    if(this.props.error) return this.props.error
  }

  loginModalHandler = () => {
    this.setState({
      loginModalState: true,
      backdropState: true
    })
  }

  signupModalHandler = () => {
    this.setState({
      signupModalState: true,
      backdropState: true
    })
  }

  render() {
    let loggedIn = localStorage.getItem('userId') ? true : false

    return (
      <div className={styles.App}>
        <LoginModal state={this.state.loginModalState}/>
        <SignupModal state={this.state.signupModalState}/>
        <Sidedrawer 
          click={this.backdropClick} 
          show={this.state.sidedrawerState}
          logout={this.props.logOut}
        />
        <Backdrop 
          show={this.props.error || this.props.message || this.state.backdropState} 
          click={this.backdropClick} 
        />
        <Modal 
          show={this.props.error || this.props.message}
          title={this.modalTitle()}  
        >
          <p className={styles.modalText}>{this.modalText()}</p>
        </Modal>
        <Navigation 
          logout={this.props.initLogOut} 
          toggleSidedrawer={this.toggleSidedrawer}
          loginModal={this.loginModalHandler}
          signupModal={this.signupModalHandler}
        />
        <Layout logout={this.props.logOut}>
          <Switch>
            { loggedIn ? <Route path="/checkout" component={Checkout} /> : null }
            { loggedIn ? <Redirect from="/login" to="/orders" /> : <Route path="/login" component={Login} /> }
            { loggedIn ? <Redirect from="/signup" to="/" /> : <Route path="/signup" component={Signup} /> }
            { loggedIn ? <Route path="/orders" component={Orders} /> : <Redirect from="/orders" to="/" /> }
            <Route path="/" component={BurgerBuilder} />            
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    state: state,
    message: state.auth.message || state.order.message || state.appReducer.message,
    error: state.auth.error || state.order.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initSignUp: (email, password) => dispatch( initSignUp(email, password)),
    initLogIn: (email, password) => dispatch( initLogIn(email, password)),
    initLogOut: () => dispatch( initLogOut() ),
    errMsgReset: () => dispatch( errMsgReset() ),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
