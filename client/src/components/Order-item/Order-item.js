import React from 'react';
import styles from './Order-item.css';

const OrderItem = props => (
  <tr className={styles.tableRow}>
    <td className={styles.name}>{props.item}</td>
    <td className={styles.quantity}>{props.quantity}</td>
    <td className={styles.price}>{props.price} $</td>
  </tr>
)

export default OrderItem;