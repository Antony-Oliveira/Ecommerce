import React from 'react';
import icon from '@/assets/icons/bolsa-de-compras.svg'

import './Card.css'

export default function Card({product}) {
  return (
  <>
      <div className="card border-2 p-2 w-[256px] hover:shadow-2xl cursor-pointer rounded-xl">
          <img src={product.image} alt={product.name}/>
          <div className="desc p-3">
            <span>{product.category}</span>
            <h5 className='text-base font-bold my-1.5'>{product.name}</h5>
            <span className='font-normal'>Estoque: {product.amount}</span>
            <div className='content flex justify-between relative'>
                <h4 className='font-bold my-2'>R${product.price},00</h4>

            </div>
          </div>
      </div>
  </>
  )
}
