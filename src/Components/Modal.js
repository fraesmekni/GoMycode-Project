import React,{ Component } from 'react';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom';

export default class Modal extends Component{

  render(){
    return(
      <ProductConsumer>
        {(value)=>{
          const {modalOpen,closeModal} = value;
          const {img,title,price} = value.modalProduct;
          if(!modalOpen){
            return null;
          }else{
            return(
            <div className="modal">
              <div className='container'>
              <div className="row">
              <div id="modal" 
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize ">
              <h5>item added to the cart</h5>
              <img src={img} className='img-fluid'/>
              <h5>{title}</h5>
              <h5 className="text-muted">price :$ {price}</h5>
              <Link to='/'>
              <button className='btn btn-primary btn-sm my-2' onClick={()=>closeModal()}>
              Continue Shopping
                </button>
                 </Link><br/>
              <Link to='/cart' >
              <button className='btn btn-warning btn-sm' onClick={()=>closeModal()}>
              Go To Cart
              </button>
              </Link>
              </div>
              </div>
              </div>
            </div>)
          }
        }}
      </ProductConsumer>
    )
  }
}