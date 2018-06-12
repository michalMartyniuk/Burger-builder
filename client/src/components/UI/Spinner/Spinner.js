import React from 'react';
import styles from './Spinner.css';
import Aux from '../../../hoc/Aux';

const Spinner = props => {
  
  let spinner = props.spinnerState ? 
    <div className={styles.spinner}>
      <div className={styles.loader}>Loading...</div>
    </div> : null

  return (
    <Aux>
      {spinner} 
    </Aux>
  )
}

export default Spinner;