import React from 'react';
import styles from './Button.css';

const Button = props => {

  let buttonClasses = [styles.Button, styles[props.btnclass]];
  buttonClasses = buttonClasses.join(' ');

  return (
    <button className={buttonClasses}
      {...props}
    >{props.children}</button>
  )
}

export default Button;