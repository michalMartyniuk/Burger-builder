import React from 'react';
import styles from './Order-item.css';

const OrderItem = props => (
  <div className={styles[props.itemClass]}>
    <div className={styles.item}>{props.item}</div>
    <div className={styles.itemValue}>{props.value}</div>
  </div>
)

export default OrderItem;