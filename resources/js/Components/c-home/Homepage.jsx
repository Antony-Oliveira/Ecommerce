import React from 'react'
import Card from '@/Components/c-card/Card'

export default function Homepage({ products }) {
  return (
    <div>
        <h1>Home Page</h1>
        {products.map((product) => (
            <Card key={product.id} product={product} />
        ))}
    </div>
  )
}
