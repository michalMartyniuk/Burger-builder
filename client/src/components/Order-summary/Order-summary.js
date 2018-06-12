import React from 'react';
import OrderItem from '../Order-item/Order-item';
import styles from './Order-summary.css';
import Aux from '../../hoc/Aux';

const OrderSummary = props => {

  let orderSummary = props.ingredients ? (
    <div className={styles.orderSummary}>
      {Object.keys(props.ingredients).map( ing => {
      return <OrderItem 
        item={ing}
        value={props.ingredients[ing].quantity}
        key={ing + props.ingredients[ing].quantity}
        itemClass={props.itemClass}
      />
      })}
      <p className={styles[props.totalPriceClass]}>Total price: {props.totalPrice}</p>
    </div>
  ) : null;

  return orderSummary;
}

export default OrderSummary;