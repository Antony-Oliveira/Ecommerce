import Header from '@/Components/c-header/Header'
import Footer from '@/Components/footer/Footer'
import React from 'react'

export default function ContactPage() {
  return (
    <>
      <Header/>
      <div className="contact flex flex-wrap justify-center items-center gap-10 m-10">
        <div className='flex flex-col w-full'>
          <div className='flex flex-col'>
            <label htmlFor="Nome">Nome</label>
            <input type='text' placeholder='Digite seu nome aqui!'/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email">E-mail</label>
            <input type="email" placeholder='example@email.com '/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="assunto">Assunto</label>
            <textarea cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className='bg-black w-full h-[400px] p-1 flex justify-center items-center' >
          <h1 className='text-white'>FRAME DO GOOGLE MAPS</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}
