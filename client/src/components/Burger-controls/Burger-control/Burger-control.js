import React from 'react';
import styles from './Burger-control.css';

const BurgerControl = props => {
  return (
    <div className={styles.BurgerControl}>
      <span className={styles.ctrlType}>{
        props.type.charAt(0).toUpperCase() + props.type.slice(1, props.type.length)
      }</span>
      <span className={styles.ctrlValue}>{props.value}</span>
      <span className={styles.ctrlPrice}>$ {props.price}</span>
      <div className={styles.ctrlBtns}>
        <button 
          className={styles.ctrlLess}
          onClick={props.remove}
          disabled={props.disabledButtons()[props.type]}
        >-</button>
        <button 
          className={styles.ctrlMore}
          onClick={props.add}
        >+</button>
      </div>
    </div>
  )
}

export default BurgerControl;