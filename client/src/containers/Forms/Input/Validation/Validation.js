import React from 'react';
import styles from './Validation.css';

const validation = props => {
  
  let validated = {}

  const valid = ({name, value, message}) => {
    switch(name) {
      case 'isEmail': 
        validated.isEmail = { name, value, message }
        break;
      case 'required':
        validated.required = { name, value, message }
        break;
      case 'minLength':
        validated.minLength = { name, value, message }
      default: null;
    }
    
    props.valid(props.name, validated)
  }

  const validate = () => {
    let messages = []
    let message = <p className={styles.invalid}>Validation required</p>
    
    if(props.validation.isEmail.value === true) {
      const pattern = /^[^\\/!@#$%^&*()=+{}:`~?'"<>|]+@[^\\/!@#$%^&*()=+{}:`~?'"<>|.]+\.[^\\/!@#$%^&*()=+{}:`~?'"<>|.]{2,4}$/
      if(!pattern.test(props.value)) {
        let message = props.validation.isEmail.msg
        valid({ 
          name: 'isEmail', 
          value: false, 
          message: message
        })
        messages.push(message)
      }
      else {
        valid({ name: 'isEmail', value: true, msg: null })
      }
    }

    if(props.validation.required.value === true) { 
      if(props.value == '') {
        let message = props.validation.required.msg
        valid({ 
          name: 'required', 
          value: false, 
          message: message
        })
        messages.push(message)
      }
      else { 
        valid({ name: 'required', value: true, msg: null })
      }
    }

    if(props.validation.minLength.value > props.value.length) {
      let message = props.validation.minLength.msg
        valid({ 
          name: 'minLength', 
          value: false, 
          message: message
        })
        messages.push(message)
    }
    else { valid({ name: 'minLength', value: true, msg: null })}

    if(messages.length > 0) {
      messages = messages.join('. ');
      return <p className={styles.invalid}>
        {messages[0].toUpperCase() + messages.slice(1)}
      </p>
    }
  }

  return (
    <div className={styles.validation}>
      {props.touched ? validate() : null}
    </div>
  )
}

export default validation;