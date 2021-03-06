import React, { Component } from 'react';
import styles from './Form-order.css';
import Input from '../Input/Input';
import formConfig from '../Form-config/order-config';
import Button from '../../../components/UI/Buttons/Button/Button';
import Card from '../../../components/UI/Card/Card';

class OrderForm extends Component {
 
  state = {
    formConfig,
    validation: {}
  }

  componentDidMount() {
    let config = { }
    for(let item in this.state.formConfig) {
      for(let prop in this.state.formConfig[item].validation) {
        config[item] = {
          ...config[item],
          [prop]: { ...this.state.formConfig[item].validation[prop], value: false }
        }   
      }
    }
    this.validation = config
  }
  
  inputChangeHandler = (e, key) => {
    this.setState({
      formConfig: {
        ...this.state.formConfig,
        [key]: {
          ...this.state.formConfig[key],
          value: e.target.value,
          touched: true,                  
        }
      }
    })
  }

  orderSubmitHandler = (e) => {
    e.preventDefault();

    let valid = true;

    const form = {...this.state.formConfig }
    for(let key in form) {
      form[key].touched = true
    }
    this.setState({ formConfig: form })
  
    for(let key in this.validation) {
      for(let prop in this.validation[key]) {
        if(this.validation[key][prop].value === false) valid = false;
      }
    }
    if(valid === true) {
      let userInfo = {}
      let invalidMessages = []
      for(let key in this.state.formConfig) {
        userInfo[key] = this.state.formConfig[key].value
      }
      this.props.orderSubmit(userInfo) 
    }
  }

  validatedHandler = (key, obj) => {
    this.validation = { ...this.validation, [key]: obj }
  }

  render() {
    let inputs = Object.keys(this.state.formConfig).map( key => {
      return <Input
        inputClass="Input"
        {...this.state.formConfig[key].config}
        validated={this.validatedHandler}
        key={key}
        name={key}
        inputchange={(event) => this.inputChangeHandler(event, key)}
        value={this.state.formConfig[key].value}
        touched={this.state.formConfig[key].touched}
        validation={this.state.formConfig[key].validation}
        inputtype='input'
        type={key === ('password' || 'confirmPassword') ? 'password' : 'text'}
      />
    })
    
    return (
      <Card title="Order" styleCard={{marginTop: '2rem'}}>
        <form className={styles.Form} onSubmit={this.orderSubmitHandler}>
          {inputs}
          <div className={styles.wrapper}>
            <button className={styles.orderButton}>Order</button>
          </div>
        </form>
      </Card>
    )
  }
}

export default OrderForm;