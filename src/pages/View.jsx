import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../slices/wishlistSlice'
import { addToCart } from '../slices/cartSlice'

const View = () => {

  const dispatch = useDispatch()
  const userCart=useSelector(state=>state.cartReducer)
  
  const userWishtlist=useSelector(state=>state.wishlistReducer)

  const [product,setProduct]=useState({})
  const {id}= useParams()
  console.log(id);
  

  useEffect(()=>{

    if(sessionStorage.getItem("allProducts")){

      const allProducts= JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct( allProducts.find(item=>item.id==id) );

    }
   
    
  },[])
  
  const handleWishlist=()=>{
    const existingProduct=userWishtlist?.find(item=>item?.id==id)
    if(existingProduct){
      alert("Product already exist..!")
    }else{
      dispatch(addToWishlist(product))
    }
  }
  
  const handleCart=()=>{
    dispatch(addToCart(product))
    const existingProduct=userCart?.find(item=>item.id==id)
    if(existingProduct){
      alert("product quantity increased")
    }else{
      alert(" product added to cart")
    }
  }
  return (
    <>
      <Header/>
      <div className='flex flex-col mx-5'> 
          
            <div className='grid grid-cols-2 items-center h-screen'>
              <div className='m-3'>
                <img className='ms-40 ' width={'350px'} src={product?.thumbnail} alt="" />
              <div className='flex justify-between mt-5'>
                    <button onClick={handleWishlist} className='bg-blue-600 text-white p-2 rounded'>Add to wishlist</button>
  
                    <button onClick={handleCart} className='bg-green-600 text-white p-2 rounded'>Add to cart</button>
                  </div>
              </div>
                

            <div>
                <h3 className='font-bold'>PID : {product?.id}</h3>
                <h1 className='text-5xl font-bold'>{product?.title}</h1>
                <h4 className='font-bold text-red-600'>{product?.price}$</h4>
                <h4>Brand: {product?.brand}</h4>
                <h4> Category : {product?.category}</h4>
                <p>
                  <span className='font-bold'>Discription</span>: {product?.description}
                </p>
                <h3 className='font-bold mt-4'>Client Reviews</h3>{
                  product?.reviews?.length>0?
                  product?.reviews?.map(item=>(
                    <div key={item?.date} className='shadow rounded p-2 mb-2'>
                      <h5>
                        <span className='font-bold'>{item?.reviewerName}</span>: <span>{item?.comment}</span>
                      </h5>
                      <p>Rating: {item?.rating} <i className='fa-solid fa-star text-yellow-500'></i> </p>
                    </div>
                  ))
                  :
                  <div className='font-bold text-red-600'>No reviews yet</div>
                }
            </div>

          </div>
          </div>
      <div/>
    </>
  )
}

export default View