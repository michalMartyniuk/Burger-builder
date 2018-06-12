import React, { Component } from 'react';
import styles from './Orders.css';
import Order from './Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {

  state = {
    orders: null
  }

  componentDidMount() {
    axios.get('https://burger-builder-4872a.firebaseio.com/orders.json')
      .then( response => {
        let orders = {};
        let filteredOrders = Object.keys(response.data).filter( orderId => {
          return response.data[orderId].userId === localStorage.getItem('userId')
        })
        filteredOrders.map( orderId => {
          orders[orderId] = response.data[orderId]
        })
        this.setState({ orders }, () => console.log(this.state.orders))
      })
      .catch( error => console.log(error))
  }

  render() {
    let orders = this.state.orders ? Object.keys(this.state.orders).map( order => {
      return <Order 
        ingredients={this.state.orders[order].ingredients}
        totalPrice={this.state.orders[order].totalPrice}
        createdAt={this.state.orders[order].createdAt}
        key={order}
        id={order}
      />
    }) : null

    return (
      <div className={styles.Orders}>
        {orders}
      </div>
    )
  }
}
export default Orders;