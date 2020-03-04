import React,{ Component } from 'react';

export default class CartColumss extends Component{

  render(){
    return(
      <div className='container-fluid text-center d-none d-lg-block'> 
      <div className='row'>
      <div className='col-10 mx-auto col-lg-2'>
      <p className='text-uppercase'>product</p>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      <p className='text-uppercase'>name</p>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      <p className='text-uppercase'>price</p>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      <p className='text-uppercase'>quantity</p>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      <p className='text-uppercase'>remove</p>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      <p className='text-uppercase'>total</p>
      </div>
      </div> 
      </div>
    )
  }
}