import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/*title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="img" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>Model : {title}</h3>
                  <h4 className="text-title text-uppercase mt-3 mb-2">
                    Made By : {company}
                  </h4>
                  <h4 className="text-blue">
                    <strong> Price : ${price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/*buttons */}
                  <div>
                    <Link to="/" className="btn btn-primary btn-sm mx-4">
                      Back 
                    </Link>
                    <Link to="/details" className="btn btn-warning btn-sm"
                     disabled={inCart ? true:false}
                     onClick={() =>{
                       value.addToCart(id);value.openModal(id);
                     }}>
                      {inCart ? 'In Cart':'Add To Cart'}
                    </Link>
                  </div>
                  {/*end buttons */}
                </div>
              </div>
              {/* end product info */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
