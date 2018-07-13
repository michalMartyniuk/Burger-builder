import React, { Component } from 'react';
import styles from './Orders.css';
import axios from '../../axios-orders';
import OrderSummary from '../../components/Order-summary/Order-summary';
import Card from '../../components/UI/Card/Card';

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
    let orders = this.state.orders ? 
      Object.keys(this.state.orders).map( order => {
        return (
          <Card 
            title={"Id: " + order} 
            styleTitle={{fontSize: '2.2rem', marginBottom: '1rem'}}
            styleCard={{
              margin: '2rem auto',
              fontSize: '2rem'
            }}
          >
            <p className={styles.createdAt}>Created at: {this.state.orders[order].createdAt}</p>
            <OrderSummary 
              ingredients={this.state.orders[order].ingredients}
              totalPrice={this.state.orders[order].totalPrice}
              createdAt={this.state.orders[order].createdAt}
              key={order}
              id={order}
              totalPriceClass="summaryTotalPrice"
            />
          </Card>
        )
      }) : null

    return (
      <div className={styles.Orders}>
        {orders}
      </div>
    )
  }
}
export default Orders;