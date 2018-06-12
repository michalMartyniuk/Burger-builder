import React from 'react';
import styles from './Backdrop.css';
import Aux from '../../../hoc/Aux';

const Backdrop = props => {

  let backdrop = props.show ? (
    <div 
      className={styles.Backdrop}
      onClick={props.click}  
    ></div>    
  ) : null

  return (
    <Aux>
      {backdrop}
    </Aux>
  )
}

export default Backdrop;