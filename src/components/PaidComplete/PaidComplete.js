import React, { Component } from 'react';
import './PaidComplete.css';
import { Link } from 'react-router-dom';

class PaidComplete extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const paidMethodParams = this.props.paidMethodParams;
    let title;
    let content;
    if (paidMethodParams === 'credit-card') {
      title = '付款完成！';
      content = '感謝您的訂購，我們將盡快為您處理您的訂單:)';
    }
    return (
      <div>
        <div className="paid-box">
          <div className="paid-title">{title}</div>
          <div className="paid-content">{content}</div>
          <Link to={'/'} style={{textDecoration: 'none'}}>
            <button className="paid-back-btn">回首頁</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default PaidComplete;