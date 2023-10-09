import React from 'react'
import Header from '@/Components/c-header/Header'
import Card from '@/Components/c-card/Card'
import Footer from '@/Components/footer/Footer'
import Banner from '@/Components/c-banner/Banner'
import '@/../../resources/css/app.css'
export default function StorePage({products}) {
  return (
    <>
      <Header/>
      <div className='hero section-p1 '>
        <h1>Compre agora!</h1>
        <p>Entregas gratuitas para <span className='color'>Fortaleza!</span></p>
      </div>
      <div className='flex justify-center items-center flex-wrap gap-10 m-10'>
        {products.map((product) => <Card key={product.id} product={product} />)}
      </div>
      <Footer />
    </>
  )
}
