import React from 'react';
import styles from './Modal.css';
import Aux from '../../../hoc/Aux';
import Card from '../Card/Card';
import OrderSummary from '../../Order-summary/Order-summary';

const Modal = props => {
  
  let buttons = props.buttons ? (
    <div className={styles.cardButtons}>
      {props.buttons.map( button => {
        return <button 
          key={button.name} 
          className={styles.cardBtn}
          style={button.style}
          onClick={button.onClick}

        >{button.name}</button>
      })}
    </div> ) : null;

  let orderSummary = props.ingredients ? (
    <OrderSummary
      ingredients={props.ingredients}
      totalPrice={props.totalPrice}
      totalPriceClass="summaryTotalPrice"
      itemClass="ModalItem"   // 'ModalItem' and 'CheckoutItem' classes available
    />
  ) : null;
  
  let modal = props.show ? (
    <div className={styles.Modal}>    
      <Card title={props.title} styleCard={{"width": "100%"}}>
        {props.children}
        {orderSummary}  
        {buttons}        
      </Card>
    </div>
  ) : null;


  return (
    <Aux>
      {modal}
    </Aux>
  )
}

export default Modal