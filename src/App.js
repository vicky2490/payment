import React, { Component } from 'react';
import './App.css';
import Header from './components/Headers/Header';
import Product from './components/Products/Product';
import PayMethod from './components/PayMethods/PayMethod';
import _ from 'lodash';

class App extends Component {

  constructor() {
    super();
    this.state = {
      buyItems:[{
        name: 'notebook',
        description: 'notebook is so good',
        count: 1,
        price: 1000,
      },{
        name: 'headset',
        description: 'headset is good',        
        count: 1,
        price: 1000,        
      }],
      payMethods: [{
        method: 'credit-card',
        description: '使用信用卡付款',
      },{
        method: 'atm',
        description: '使用WebATM付款',
      },{
        method: 'shop',
        description: '使用超商代碼付款',
      }],
    } 
  }

  less = (index) => {
    console.log('less', index);
    let buyItems = _.clone(this.state.buyItems);
    if (buyItems[index].count === 0) {
      console.log('不能小於0');
      return;
    }
    buyItems[index].count = buyItems[index].count -1;
    buyItems[index].price = buyItems[index].price -1000;
    this.setState({
      buyItems,
    });
  }
  
  plus = (index) => {
    console.log('plus', index);
    let buyItems = _.clone(this.state.buyItems);
    buyItems[index].count = buyItems[index].count +1;
    buyItems[index].price = buyItems[index].price +1000;
    this.setState({
      buyItems,
    });
  }

  getTotalProce = () => {
    return _.sum(_.map(this.state.buyItems, 'price'));
  }
  removeItem = (index) => {
    let buyItems = _.clone(this.state.buyItems);
    buyItems.splice(index, 1);
    this.setState({
      buyItems,
    });
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
               {this.state.buyItems.map((item, i) => <Product key={i} index={i} item={item} less={(index) => this.less(index)} plus={(index) => this.plus(index)} removeItem={(index) => this.removeItem(index)}/>)}
              <div className="total-price">
                <div className="total-word">Total</div>
                <div className="price-all-box">
                  <div className="price-all">{`$${this.getTotalProce()}`}</div>                  
                </div>
              </div>
            </div>
            <div className="triangle-box">
              <div className="triangle"></div>            
            </div>
          </div>
        </div>
          <h2>選擇付款方式</h2>
          <div className="payment-content">
               {this.state.payMethods.map((payMethod, i) => <PayMethod key={i} payMethod={payMethod} less={(index) => this.less(index)}/>)}
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
