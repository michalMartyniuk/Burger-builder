import React from 'react';
import styles from './Order.css';
import Card from '../../../components/UI/Card/Card';
import OrderSummary from '../../../components/Order-summary/Order-summary.js';

const Order = props => {
  
  const ingredients = Object.keys(props.ingredients).map( ingredient => {
    return (
      <div className={styles.ingredient}>
        <div>{ingredient}</div>
        <div>{props.ingredients[ingredient].quantity}</div>
        <div>{props.ingredients[ingredient].price} $</div>  
      </div>
    )
  })

  const totalPrice = <div className={styles.totalPrice}>Total price: {props.totalPrice} $</div>


  return (
    <Card 
      title={"Id: " + props.id} 
      styleTitle={{fontSize: '2.2rem', marginBottom: '1rem'}}
      styleCard={{
        margin: '2rem auto',
      }}
    >
    <div className={styles.Order}>
      <p className={styles.createdAt}>{props.createdAt}</p>
      <div className={styles.ingredients}>
        {ingredients}
      </div>
        {totalPrice}
    </div>
  </Card>
  
  )
}

export default Order;