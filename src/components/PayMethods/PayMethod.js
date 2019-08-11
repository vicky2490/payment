import React, { Component } from 'react';
import './PayMethod.css';
import { Link } from 'react-router-dom';

class PayMethod extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const payMethod = this.props.payMethod;
    const payMethodParams = this.props.payMethodParams;
    return (
      <Link to={`/pays/${payMethod.method}`} style={{textDecoration: 'none'}}>
        <div className={payMethod.method === payMethodParams ? "payment-box choice" : "payment-box"}>
          <div className={`payment-icon ${payMethod.method}`}></div>
          <div className="payment-description">{payMethod.description}</div>
        </div>
      </Link> 
    );
  }
}

export default PayMethod;