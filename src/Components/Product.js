import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
        <ProductConsumer>
          {
            (value) => (
              <div className="img-container p-5" onClick={() =>value.handleDetail(id)}>
            <Link to="/details">
              <img src={img} alt="Product img" className="card-img-top" />
            </Link>
            <button className='cart-btn' 
            disabled={inCart ? true:false}
             onClick={() =>{ value.addToCart(id);value.openModal(id)}}>
             {inCart?'In Cart':'Add To Cart'}
             </button>
              </div>
            )}
          </ProductConsumer>
          <div class='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>
             {title}
             </p>
             <h5 className='text-blue font-italic mb-0'>
             <span className='mr-1'>$</span>{price}
             </h5>
          </div>
        </div>
      </div>
    );
  }
}
/*
Product.propTypes = {
 product:PropTypes.shape({
   id:PropTypes.number,
   img:PropTypes.string,
   title:PropTypes.string,
   price:PropTypes.number,
   inCart:PropTypes.bool
 }).isRequired,
} */