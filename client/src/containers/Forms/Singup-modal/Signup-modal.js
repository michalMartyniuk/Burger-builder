import React, { Component } from 'react';
import Input from '../Input/Input';
import formConfig from '../Form-config/sign-up-config';
import Button from '../../../components/UI/Buttons/Button/Button'
import GoogleButton from '../../../components/UI/Buttons/google-button/google-button';
import Modal from '../../../components/UI/Modal/Modal';
import Aux from '../../../hoc/Aux';

import styles from './Signup-modal.css';
import { connect } from 'react-redux';
import { initSignUp } from '../../../store/actions/auth';

class SignupModal extends Component {
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

  formSubmitHandler = (e) => {
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
      this.props.initSignUp(userInfo.email, userInfo.password)
    }
    
  }

  validatedHandler = (key, obj) => {
    this.validation = { ...this.validation, [key]: obj }
  }

  render() {
    let inputs = Object.keys(this.state.formConfig).map( key => {
      return <Input
        inputClass="modalInput"
        {...this.state.formConfig[key].config}
        validated={this.validatedHandler}
        key={key}
        name={key}
        inputchange={(event) => this.inputChangeHandler(event, key)}
        value={this.state.formConfig[key].value}
        touched={this.state.formConfig[key].touched}
        validation={this.state.formConfig[key].validation}
        inputtype='input'
        type={key === 'password' || key === 'confirmPassword' ? 'password' : 'text'}
      />
    })

    let signupModal = this.props.state ? (
      <div className={styles.modalSignup}>
        <Modal show title="Sign up">
          <form className={styles.Form} onSubmit={this.formSubmitHandler}>
            <GoogleButton googleClass="googleModalButton" text="Sign in with google"/>
            <div className={styles.signupOr}>
              <hr/>
              <span>OR</span> 
              <hr/>
            </div>          
            {inputs}
            <div className={styles.wrapper}>
              <button className={styles.signupButton}>Sign up</button>
            </div>
          </form>
        </Modal>
      </div>
    ) : null

    return (
      <Aux>
        {signupModal}
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    initSignUp: (email, password) => dispatch( initSignUp(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);