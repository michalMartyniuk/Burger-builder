import React from 'react';
import styles from './Input.css';
import Validation from './Validation/Validation';

const Input = props => {

  const inputClasses = [styles.inputElement]  

  const createInput = () => {
    let inputElement = null;
    let inputClasses = [styles.inputElement];
    switch (props.inputtype) {
      case 'input':
        inputElement = <input onChange={props.inputchange} className={inputClasses.join(' ')} {...props} />      
        break;
      case 'textarea':
        inputElement = <textarea onChange={props.inputchange} className={inputClasses.join(' ')} {...props} />
        break;
      default:
        inputElement = null
    }
    return inputElement;
  }

  return (
    <div className={styles.Input}>
      <label htmlFor="">{props.label}</label>
      {createInput()}
      <Validation 
        valid={props.validated}
        name={props.name}
        validation={props.validation}
        value={props.value}  
        touched={props.touched}
      />
    </div>
  )
}

export default Input;