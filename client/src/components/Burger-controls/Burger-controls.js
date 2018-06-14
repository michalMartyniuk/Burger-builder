import React from 'react';
import BurgerControl from './Burger-control/Burger-control';
import styles from './Burger-controls.css';
import HideControlsButton from './Hide-controls-button/Hide-controls-button';
import Aux from '../../hoc/Aux';

const BurgerControls = props => {  
  return (
    <div 
    className={styles.BurgerControls}
    style={{
      transform: props.controlsState ? 'translate(-50%, 100%)' : null
    }}
    >
      <HideControlsButton  
        toggleControls={props.toggleControls}
        controlsState={props.controlsState}  
      />
      {Object.keys(props.ingredients).map( ing => {
        return (
          <BurgerControl 
            value={props.ingredients[ing].quantity} 
            type={ing} 
            add={() => props.add(ing)}
            remove={()=> props.remove(ing)}
            price={props.ingredients[ing].price}
            disabledButtons={props.disabledButtons}
            key={ing + props.ingredients[ing].quantity}
          />  
        )
      })
      }
      <div className={styles.checkout}>
        <span className={styles.totalPrice}>Total: {props.totalPrice} $</span>
        <button 
          className={styles.checkoutBtn}
          onClick={props.toggleModal}  
        >Order</button>
      </div>
    </div>
  )
}

export default BurgerControls;