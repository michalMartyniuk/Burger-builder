import React, { Component } from 'react';
import styles from './google-button.css';
import { connect } from 'react-redux';
import { initLogIn } from '../../../../store/actions/auth';
import axios from 'axios';

class GoogleButton extends Component {

  render() {
    return (
      <a className={styles[this.props.googleClass]} href="/auth/google">
        <span className={styles.googleIcon}><i className="fab fa-google"></i></span>
        <span className={styles.googleText}>{this.props.text}</span>
      </a>        
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleButton);