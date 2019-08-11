import React, { Component } from 'react';
import './CreditCard.css';
import { Link } from 'react-router-dom';

class CreditCard extends Component {

  constructor() {
    super();
    this.state = {
      isDisplayExp: false,
      isDisplaySecurityCode: false,
      cardNumber: '',
      enName: '',
      exp: '',
      securityCode: '',
      phone: '',
      isErrorCardNumber: false,
      isErrorEnName: false,
      isErrorExp: false,
      isErrorSecurityCode: false,
      isErrorPhone: false,
    }
  }

  getLegend = (params) => {
    let isDisplayExp = this.state.isDisplayExp;
    let isDisplaySecurityCode = this.state.isDisplaySecurityCode;
    if (params === 'exp') {
      isDisplayExp = !isDisplayExp;
    } else {
      isDisplaySecurityCode = !isDisplaySecurityCode;
    }
    this.setState({
      isDisplayExp,
      isDisplaySecurityCode,
    });
  }

  onKeyDown = (e) => {
    if (e.keyCode === 8) {
     e.preventDefault();
     let inputValue = e.target.value;
     let lastWord = inputValue.substring(inputValue.length-1);
     if (lastWord === ' ') {
       inputValue = inputValue.substring(0, inputValue.length-2);       
     } else {
       inputValue = inputValue.substring(0, inputValue.length-1);
     }
     this.setState({ cardNumber: inputValue });
    }
  }

  handleCardNumberChange = (event) => {
    let value = event.target.value;
    let valueReplaceSpace = value.replace(/ /g,"");
    let isErrorCardNumber = false;

    // 輸入非數字
    if (isNaN(valueReplaceSpace)) {
      console.log('isNaN error');
      isErrorCardNumber = true;
    }
    
    // 長度大於16字元
    if (valueReplaceSpace.length > 16) {
      console.log('length error');
      isErrorCardNumber = true;      
    }
    // 4碼中間空格
    if (valueReplaceSpace.length % 4 === 0) value = value + ' ';
    this.setState({
      cardNumber: value,
      isErrorCardNumber,
    });
  }

  handleEnNameChange = (event) => {
    let regex = /[^a-zA-Z\s]/;
    let name = event.target.value;
    let isErrorEnName = regex.test(name);
    this.setState({
      enName: name,
      isErrorEnName,
    });
  }

  onKeyDownExp = (e) => {
    if (e.keyCode === 8) {
     e.preventDefault();
     let inputValue = e.target.value;
     let lastWord = inputValue.substring(inputValue.length-1);
     if (lastWord === '/') {
       inputValue = inputValue.substring(0, inputValue.length-2);       
     } else {
       inputValue = inputValue.substring(0, inputValue.length-1);
     }
     this.setState({ exp: inputValue });
    }
  }

  handleExpChange = (event) => {
    let value = event.target.value;
    let isErrorExp = false;
    let valueReplaceSpace = value.replace(/\//,"");

    let regex = /^[0-1]/;
    if (!regex.test(valueReplaceSpace)) {
      console.log('regex error');  
      isErrorExp = true;          
    }

    if (valueReplaceSpace.length === 2) value += '/';
    // 輸入非數字
    if (isNaN(valueReplaceSpace)) {
      console.log('isNaN error');
      isErrorExp = true;
    }   
    this.setState({
      exp: value,
      isErrorExp,
    });
  }  

  handleSecurityCodeChange = (event) => {
    let value = event.target.value;
    let isErrorSecurityCode = false;
        // 輸入非數字
    if (isNaN(value)) {
      console.log('isNaN error');
      isErrorSecurityCode = true;
    } 
    this.setState({
      securityCode: value,
      isErrorSecurityCode,
    }); 
  }  

  handlePhoneChange = (event) => {
    let value = event.target.value;
    let isErrorPhone = false;
    let regex = /^09[0-9]{8,}/;

    if (!regex.test(value)) {
      console.log('regex error');  
      isErrorPhone = true;          
    }
    this.setState({
      phone: value,
      isErrorPhone,
    }); 
  }

  isSend = () => {
    let isCanSend = true;
    const {cardNumber, enName, exp, securityCode, phone, isErrorCardNumber, isErrorEnName, isErrorExp, isErrorSecurityCode, isErrorPhone} = {...this.state};
    if (!cardNumber || !enName || !exp || !securityCode || !phone) {
      isCanSend = false;
    }
    if (isErrorCardNumber || isErrorEnName || isErrorExp || isErrorSecurityCode || isErrorPhone) {
      isCanSend = false;
    }
    return isCanSend;
  }

  render() {
    const totalPrice = this.props.totalPrice;
    let paidState = this.isSend() ? 'complete' : 'fail';
    
    return (
      <div>
        <div className="payment-order-detail">
          <div className="flex-space-between">
            <div className="table-field">應付金額</div>
            <div className="payment-table-order-price">{`$${totalPrice}`}</div>
          </div>
          <div className="table-field field-right">支援信用卡種類</div>
          <div className="credit-card-icon visa-icon"></div>
          <div className="credit-card-icon master-icon"></div>
          <div className="credit-card-icon jcb-icon"></div>
        </div>
        <div className="card-table">
          <div className="fields">
            <div className="field">
              <div className="table-field field-name-box">信用卡卡號</div>
              <input type="text" maxLength="19" value={this.state.cardNumber} onChange={this.handleCardNumberChange} onKeyDown={this.onKeyDown}/>
              { this.state.isErrorCardNumber && <div className="error-icon"></div> }
              { this.state.isErrorCardNumber && <div className="error-message">請輸入卡正面16位卡號</div> }
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <div className="table-field field-name-box">持卡人英文姓名</div>
              <input type="text" value={this.state.enName} onChange={this.handleEnNameChange} />
              { this.state.isErrorEnName && <div className="error-icon"></div> }
              { this.state.isErrorEnName && <div className="error-message">請輸入持卡人英文姓名</div> }
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <div className="table-field field-name-box">有效年月</div>
              <div className="legend-box">
                <input type="text" maxLength="5" className="input-length" value={this.state.exp} onChange={this.handleExpChange} onKeyDown={this.onKeyDownExp}/>
                <button className="legend-icon" onClick={()=>this.getLegend('exp')}></button>
              </div>  
              { this.state.isErrorExp && <div className="error-icon"></div> }
              { this.state.isErrorExp && <div className="error-message">請輸入有效月年</div> }
              {this.state.isDisplayExp && <div className="exp-icon"></div>}    
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <div className="table-field field-name-box">安全驗證碼</div>
              <div className="legend-box">
                <input type="password" maxLength="3" className="input-length" value={this.state.securityCode} onChange={this.handleSecurityCodeChange}/>
                <button className="legend-icon" onClick={()=>this.getLegend('securityCode')}></button>
              </div> 
              { this.state.isErrorSecurityCode && <div className="error-icon"></div> }
              { this.state.isErrorSecurityCode && <div className="error-message">請輸入簽名欄旁三碼數字</div> }
              {this.state.isDisplaySecurityCode && <div className="security-code-icon"></div>}                
            </div>
          </div>
          <div className="fields reset-margin-bottom">
            <div className="field">
              <div className="table-field field-name-box">手機號碼</div>
              <input type="text" maxLength="10" value={this.state.phone} onChange={this.handlePhoneChange}/>
              { this.state.isErrorPhone && <div className="error-icon"></div> }
              { this.state.isErrorPhone && <div className="error-message">請輸入手機號碼</div> }
            </div>
          </div>
          <ul className="card-precautions">
            注意事項
            <li>假文字假文字假文字假文字假文字，假文字假文字假文字假文字。</li>
            <li>這也是假文字假文字假文字，假文字假文字假文字。</li>
            <li>這還是假文字假文字，假文字假文字假文字假文字。</li>
          </ul>
          <div className="btn-box">
            <Link to={'/'} style={{textDecoration: 'none'}}>
              <button className="card-table-btn back">返回訂單</button>
            </Link>
            <Link to={`/paid/${paidState}/credit-card`} style={{textDecoration: 'none'}}>            
              <button className="card-table-btn send" disabled={this.isSend() ? "" : "disabled"}>送出</button>
            </Link>          
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;