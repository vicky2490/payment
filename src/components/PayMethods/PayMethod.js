import React, { Component } from 'react';
import './PayMethod.css';

class PayMethod extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const payMethod = this.props.payMethod;
    return (
      <button className="payment-box">
        <div className={`payment-icon ${payMethod.method}`}></div>
        <div className="payment-description">{payMethod.description}</div>
      </button>
    );
  }
}

export default PayMethod;