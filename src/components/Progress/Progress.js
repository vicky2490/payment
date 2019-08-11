import React, { Component } from 'react';
import './Progress.css';

class Progress extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const stepActive = this.props.stepActive;
    return (
      <div className="progress-bar">
        <h1>訂單資訊</h1>
        <div className="progress">
            <div className="point point-active"></div>
            <div className={stepActive ? "line line-active" : "line line-gray"}>
              <div className="step-word">Step1 選定支付方式</div>
            </div>
            <div className={stepActive ? "point point-active" : "point point-gray"}></div>
            <div className={stepActive === 'complete' ? "line line-active" : "line line-gray"}>
              <div className="step-word">Step2 輸入信用卡資訊或取得支付代碼</div>
            </div>
            <div className={stepActive === 'complete' ? "point point-active" : "point point-gray"}></div>
        </div>
      </div>
    );
  }
}

export default Progress;