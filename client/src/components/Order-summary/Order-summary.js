import React from 'react';
import OrderItem from '../Order-item/Order-item';
import styles from './Order-summary.css';
import Aux from '../../hoc/Aux';

const OrderSummary = props => {
  return (
    <div className={styles.orderSummary}>
      <table className={styles.orderTable}>
        <tr className={styles.tableRow}>
          <th className={styles.name}>Name</th>
          <th className={styles.quantity}>Quantity</th>
          <th className={styles.price}>Price</th>
        </tr>
        {Object.keys(props.ingredients).map( ing => {
      return <OrderItem 
        item={ing}
        quantity={props.ingredients[ing].quantity}
        price={props.ingredients[ing].price}
        key={ing + props.ingredients[ing].quantity}
        itemClass={props.itemClass}
      />
      })}
      </table>
      
      <p className={styles[props.totalPriceClass]}>Total price: {props.totalPrice} $</p>
    </div>
  );
}

export default OrderSummary;