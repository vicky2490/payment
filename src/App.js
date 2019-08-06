import React, { Component } from 'react';
import './App.css';
import Header from './components/Headers/Header';

class App extends Component {

  constructor() {
    super();
    this.state = {
    } 
  }
  render() {
    return (
      <div className="wrap">
        {<Header/>}
        <div className="progress-bar">
          <h1>訂單資訊</h1>
          <div className="progress">
              <div className="point point-blue"></div>
              <div className="line line-gray">
                <div className="step-word">Step1 選定支付方式</div>
              </div>
              <div className="point point-gray"></div>
              <div className="line line-gray">
                <div className="step-word">Step2 輸入信用卡資訊或取得支付代碼</div>
              </div>
              <div className="point point-gray"></div>
          </div>
        </div>
        <div className="order-content">
          <h2>確認訂單金額</h2>
          <div>
            <div className="products-content">
              <div className="order-no">訂單編號 201907310111</div>
            </div>
            <div className="triangle-box">
              <div className="triangle"></div>            
            </div>
          </div>

        </div>
        <div className="payment-content"></div>
        <div className="precautions"></div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
