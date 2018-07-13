import React, { Component } from 'react';
import styles from './Checkout.css';
import Button from '../../components/UI/Buttons/Button/Button';
import OrderSummary from '../../components/Order-summary/Order-summary';
import { connect } from 'react-redux';
import { initOrder } from '../../store/actions/order';
import Card from '../../components/UI/Card/Card';
import OrderForm from '../Forms/Form-order/Form-order';

class Checkout extends Component {

  timestamp = () => {
    let date = new Date();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let time = `${date.getHours()}:${minutes  }:${date.getSeconds()}`;    
    date = `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}`;
    (`${date} ${time}`);
    const timestamp = `${date} ${time}`;
    return timestamp;
  }

  orderSubmitHandler = (userInfo) => {
    userInfo = {
      userInfo,
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      userId: localStorage.getItem('userId'),
      createdAt: this.timestamp()
    }
    this.props.initOrder(userInfo);
  }

  render() {
    return (
      <div className={styles.Checkout}>
        <Card title="Order summary" styleCard={{marginTop: '2rem'}}>
          <OrderSummary 
            ingredients={this.props.ingredients}
            totalPriceClass="summaryTotalPrice"
            totalPrice={this.props.totalPrice}
            itemClass="CheckoutItem" 
          />
        </Card>
        <OrderForm 
          orderSubmit={this.orderSubmitHandler}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.builder.ingredients,
    totalPrice: state.builder.totalPrice,
    message: state.order.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initOrder: (orderData) => dispatch(initOrder(orderData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);