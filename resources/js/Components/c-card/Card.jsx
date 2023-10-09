import React from 'react';
import icon from '@/assets/icons/carrinho-de-compra.svg'
import { Link } from '@inertiajs/react';
import '@/Components/c-card/Card.css'

export default function Card({product}) {
  return (
  <>
      <div className="card border-2 p-2 max-w-[256px] hover:shadow-2xl cursor-pointer rounded-xl">
          <img src={product.image} alt={product.name}/>
          <div className="desc p-3">
            <span>{product.category}</span>
            <h5 className='text-base font-bold my-1.5'>{product.name}</h5>
            <span className='font-normal'>Estoque: {product.amount}</span>
            <div className='content flex justify-between relative'>
                <h4 className='font-bold my-2'>R${product.price}</h4>
                
                <Link href={`${route('product.details', {id: product.id})}`} className="btn bg-blue-600 text-white stroke-1 border-2 p-2 absolute bottom-1.5 right-1 rounded-lg hover:opacity-90 border-none outline-none">
                  Comprar
                </Link>
            </div>
          </div>
      </div>
  </>
  )
}
