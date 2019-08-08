import React, { Component } from 'react';
import './Product.css';

class Product extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const item = this.props.item;
    const index = this.props.index;
    return (
      <div className="product">
        <div className={`pay-box ${item.name}`}></div>
        <div className="product-description">
          <div className="item-title">{item.name}</div>
          <div className="item-description">{item.description}</div>
        </div>
        <div className="control">
          <div className="buy-item-count">
            <button className="buy-item-control less" onClick={()=>this.props.less(index)}></button>
            <div className="num">{item.count}</div>
            <button className="buy-item-control plus" onClick={()=>this.props.plus(index)}></button>
          </div>
          <div className="price">{`$ ${item.price}`}</div>
          <div className="remove" onClick={()=>this.props.removeItem(index)}></div>
        </div>
      </div>
    );
  }
}

export default Product;