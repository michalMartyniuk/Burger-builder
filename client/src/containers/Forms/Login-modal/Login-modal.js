import React, { Component } from 'react';
import Input from '../Input/Input';
import formConfig from '../Form-config/log-in-config';
import Button from '../../../components/UI/Buttons/Button/Button';
import GoogleButton from '../../../components/UI/Buttons/google-button/google-button';
import Modal from '../../../components/UI/Modal/Modal';
import Aux from '../../../hoc/Aux';

import styles from './Login-modal.css';
import { connect } from 'react-redux';
import { initLogIn } from '../../../store/actions/auth';

class LoginModal extends Component {
  state = {
    formConfig,
    validation: {},
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
      this.props.initLogIn(userInfo.email, userInfo.password)
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

    let loginModal = this.props.state ? (
      <div className={styles.modalLogin}>
        <Modal show title="Log in">
          <form className={styles.Form} onSubmit={this.formSubmitHandler}>
            <GoogleButton googleClass="googleModalButton" text="Sign in with google"/>
            <div className={styles.loginOr}>
              <hr/>
              <span>OR</span> 
              <hr/>
            </div>          
            {inputs}
            <div className={styles.wrapper}>
              <button className={styles.loginButton}>Log in</button>
            </div>
          </form>
        </Modal>
      </div>
    ) : null

    return (
      <Aux>
        {loginModal}
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initLogIn: (email, password) => dispatch( initLogIn(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);