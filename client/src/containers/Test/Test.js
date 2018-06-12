import React, { Component } from 'react';
import './Test.css';
import CancelBtn from '../../components/UI/Buttons/Cancel/Cancel';
import ContinueBtn from '../../components/UI/Buttons/Continue/Continue';

class Test extends Component {
  

  render() {
    return (
      <div className="Test">
        <CancelBtn />
        <ContinueBtn />
      </div>
    )
  }
}

export default Test;