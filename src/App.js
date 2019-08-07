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
        <div className="content">
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
              <div className="product">
                <div className="pay-box notebook"></div>
                <div className="product-description">
                  <div className="item-title">商品名稱商品名稱商品名稱商品名稱</div>
                  <div className="item-description">商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明...</div>
                </div>
                <div className="control">
                  <div className="buy-item-count">
                    <div className="buy-item-control less"></div>
                    <div className="num">1</div>
                    <div className="buy-item-control plus"></div>
                  </div>
                  <div className="price">$ 1,000</div>
                  <div className="remove"></div>
                </div>
              </div>
              <div className="product">
                <div className="pay-box headset"></div>
                <div className="product-description">
                  <div className="item-title">商品名稱商品名稱商品名稱商品名稱</div>
                  <div className="item-description">商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明...</div>
                </div>
                <div className="control">
                  <div className="buy-item-count">
                    <div className="buy-item-control less"></div>
                    <div className="num">1</div>
                    <div className="buy-item-control plus"></div>
                  </div>
                  <div className="price">$ 1,000</div>
                  <div className="remove"></div>
                </div>
              </div>
              <div className="total-price">
                <div className="total-word">Total</div>
                <div className="price-all">$2,000</div>
              </div>
            </div>
            <div className="triangle-box">
              <div className="triangle"></div>            
            </div>
          </div>
        </div>
          <h2>選擇付款方式</h2>
          <div className="payment-content">
            <div className="payment-box">
              <div className="payment-icon credit-card"></div>
              <div className="payment-description">使用信用卡付款</div>
            </div>
            <div className="payment-box">
              <div className="payment-icon atm"></div>
              <div className="payment-description">使用WebATM付款</div>
            </div>
            <div className="payment-box">
              <div className="payment-icon shop"></div>
              <div className="payment-description">使用超商代碼付款</div>
            </div>
          </div>
          <div className="precautions">
          注意事項<br/>
          假文字假文字假文字假文字假文字，假文字假文字假文字假文字。<br/>
          這也是假文字假文字假文字，假文字假文字假文字。<br/>
          這還是假文字假文字，假文字假文字假文字有夠多的假文字。<br/>
          </div>
        </div>
      <div className="footer">Copy right Hello I'm Footer :)</div>
      </div>
    );
  }
}

export default App;
