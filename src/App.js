import React, { Component } from 'react';
import './App.css';
import Header from './components/Headers/Header';
import Product from './components/Products/Product';
import PayMethod from './components/PayMethods/PayMethod';
import Progress from './components/Progress/Progress';
import CreditCard from './components/CreditCard/CreditCard';
import PaidComplete from './components/PaidComplete/PaidComplete';
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

  getTotalPrice = () => {
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
     const payMethodParams = this.props.match.params.method;
     const payStatusParams = this.props.match.params.status;
     const paidMethodParams = this.props.match.params.paidMethod;
     let stepActive;
     if (payMethodParams) {
       stepActive = 'twoStep';
     } else if (payStatusParams === 'complete') {
       stepActive = 'complete';
     }
     const totalPrice = this.getTotalPrice();
    return (
      <div className="wrap">
        {<Header/>}
        <div className="content">
          <Progress stepActive={stepActive}/>
 
          <div className={(payMethodParams || payStatusParams) ? "hidden-content" : ""}>
            <h2>確認訂單金額</h2>
            <div>
              <div className="products-content">
                <div className="order-no">訂單編號 201907310111</div>
                {this.state.buyItems.map((item, i) => <Product key={i} index={i} item={item} less={(index) => this.less(index)} plus={(index) => this.plus(index)} removeItem={(index) => this.removeItem(index)}/>)}
                <div className="total-price">
                  <div className="total-word">Total</div>
                  <div className="price-all-box">
                    <div className="price-all">{`$${totalPrice}`}</div>                  
                  </div>
                </div>
              </div>
              <div className="triangle-box">
                <div className="triangle"></div>            
              </div>
            </div>
          </div>
          {payStatusParams !== 'complete' && <h2>選擇付款方式</h2>}
          <div className={payStatusParams === 'complete' ? "hidden-content" : "payment-content"}>
               {this.state.payMethods.map((payMethod, i) => <PayMethod key={i} payMethod={payMethod} payMethodParams={payMethodParams}/>)}
          </div>
          <ul className={(payMethodParams || payStatusParams) ? "hidden-content" : "precautions"}>
            注意事項
            <li>假文字假文字假文字假文字假文字，假文字假文字假文字假文字。</li>
            <li>這也是假文字假文字假文字，假文字假文字假文字。</li>
            <li>這還是假文字假文字，假文字假文字假文字假文字。</li>
          </ul>
        </div>
      {payStatusParams === 'complete' && <div className="payment-table">
        {payStatusParams === 'complete' && <PaidComplete paidMethodParams={paidMethodParams}/>}
      </div>}
      {payMethodParams && <div className="payment-table">
        {payMethodParams === 'credit-card' && <CreditCard totalPrice={totalPrice}/>}
      </div>}
      <div className="footer">Copy right Hello I'm Footer :)</div>
      </div>  
    );
  }
}

export default App;
