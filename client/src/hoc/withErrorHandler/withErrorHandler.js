import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

const widthErrorHandler = (WrappedComponent, axios) => {

  return class extends Component {

    state = {
      error: null
    }
  
    componentWillMount () {
      axios.interceptors.request.use( req => {
        this.setState({ error: null });
        return req;
      });
  
      axios.interceptors.response.use(res => res, error => {
        this.setState({ error })
      });
    }
  

    backdropClick = () => {
      this.setState({
        error: false
      })
    }

    render(){
      return (
        <Aux>
          <Backdrop
            show={this.state.error}
            backdropClick={this.backdropClick}
          />
          <Modal 
            show={this.state.error} 
            text={this.state.error ? this.state.error.message : null}
          />
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default widthErrorHandler;