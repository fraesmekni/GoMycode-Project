import React from 'react';;

export default function CartItem({item,value}){
  
  const {id,title,img,price,total,count} = item;
  const{increment,decrement,removeItem} = value;
  return(
    <div className="row my-3 text-capitalize text-center">
      <div className='col-10 mx-auto col-lg-2'>
      <img src={img} style={{width:'5rem',height:'5rem'}} className='img-fluid'/>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      <span className='d-lg-none'>Product :</span>{title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      <span className='d-lg-none'>Price :</span>${price}
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
      <div className='d-flex justify-content-center'>
      <div>
        <span className='btn btn-outline-dark mx-auto  btn-sm' onClick={()=>decrement(id)}>-</span>
        <span className='btn btn-outline-dark mx-2  btn-sm' style={{color:'red'}}>
        {count}
        </span>
        <span className='btn btn-outline-dark mx-auto btn-sm' onClick={()=>increment(id)}>+</span>
      </div>
      </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      <span className='btn btn-outline-danger mx-2  btn-sm' onClick={()=>removeItem(id)}>
        Remove
        </span>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      <span className='d-lg-none'><strong>Total :</strong></span>${total} 
      </div>
    </div>
  )
}