import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import styles from './BurgerBuilder.css';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger-controls/Burger-controls';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Sidedrawer from '../../components/UI/Sidedrawer/Sidedrawer';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderItem from '../../components/Order-item/Order-item';
import widthErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Checkout from '../Checkout/Checkout';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { add, remove, initIngredients, initTotalPrice } from '../../store/actions/builder';
import { logOut } from '../../store/actions/auth';
import OrderSummary from '../../components/Order-summary/Order-summary';
import { message } from '../../store/actions/app';

class BurgerBuilder extends Component {

  state = {
    modalState: false,
    sidedrawerState: false,
    hideControls: false,
    spinner: false,
    backdropState: false
  }

  componentDidMount() {
    this.props.initIngredients()
    this.props.initTotalPrice()
  }

  disabledButtons = () => {
    const disabledIngredients = {
      ...this.props.ingredients
    }

    for (let key in disabledIngredients) {
      Object.assign(disabledIngredients, {
        [key]: disabledIngredients[key].quantity <= 0
      })
    }

    return disabledIngredients;
  }

  toggleModal = () => {
    this.setState({
      modalState: !this.state.modalState,
      backdropState: !this.state.backdropState
    })
  }

  continue = () => {
    this.setState({
      modalState: false
    })
    if(localStorage.getItem('userId')){
      this.props.history.replace('/checkout')        
    }
    else{
      this.props.message("Please log in to place your order.")
      this.props.history.replace('/login')
    }
  }

  toggleHideControls = () => {
    this.setState({
      hideControls: !this.state.hideControls
    })
  }

  render() {
    let modalCheckout = null;
    let burger = null;
    let burgerControls = null;

    if(this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
        </Aux>
      )

      burgerControls = (
        <Aux>
          <BurgerControls 
            ingredients={this.props.ingredients} 
            add={this.props.add}
            remove={this.props.remove}
            disabledButtons={this.disabledButtons}
            totalPrice={this.props.totalPrice}
            toggleModal={this.toggleModal}
            toggleControls={this.toggleHideControls}
            controlsState={this.state.hideControls}
          />
        </Aux>
      )
    }
    
    return (
      <div className={styles.BurgerBuilder}>
        <Backdrop show={this.state.modalState} onClick={this.toggleModal} />
        <Modal 
          show={this.state.modalState}
          title="Order summary"
          ingredients={this.props.ingredients}
          totalPrice={this.props.totalPrice}
          buttons={[
            {
              name: 'Cancel',
              onClick: this.toggleModal,
            },
            {
              name: 'Continue',
              onClick: this.continue,
            }
          ]}
        />
        {burger}
        {burgerControls}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.builder.ingredients,
    totalPrice: state.builder.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: ingType => dispatch(add(ingType)),
    remove: ingType => dispatch(remove(ingType)),
    initIngredients: () => dispatch(initIngredients()),
    initTotalPrice: () => dispatch(initTotalPrice()),
    logOut: () => dispatch( logOut() ),
    message: (msg) => dispatch( message(msg) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(widthErrorHandler(BurgerBuilder, axios));