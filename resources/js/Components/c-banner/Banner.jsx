import React from 'react'
import { Link } from '@inertiajs/react';
import './Banner.css'


export default function Banner() {
  return (
    <div>
        <div className="banner">
          <h4>Trade-in-offer</h4>
          <h2>Super value deals</h2>
          <h1>On all products</h1>
          <p>Save more with coupons & up to 70% off</p>
          <button>
            <Link href={`${route('product.form')}`}>
              Shop Now
            </Link>
          </button>
        </div>
    </div>
  )
}
