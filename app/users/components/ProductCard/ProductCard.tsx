'use client';
import React from 'react'
import AddToCart from '../AddToCart';
import Styles  from './ProductCard.module.css';


const ProductCard = () => {
  return (
    <div className='p-5 my-sky-400 text-xl hover:bg-sky-500'>
        <AddToCart />
    </div>
  )
}

export default ProductCard
