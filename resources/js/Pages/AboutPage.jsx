import Header from '@/Components/c-header/Header'
import Footer from '@/Components/footer/Footer'
import svg from '@/assets/vetores/clothes-store.svg'
import img from '@/assets/banner.png'

import React from 'react'

export default function AboutPage() {
  return (
    <>
      <Header activePage="aboutpage"/>
      <div className='flex justify-center items-center flex-wrap gap-10'>
          <img src={svg} alt="Svg de pessoas fazendo Compras" className='w-[40%]'/>
          <div className='p-2'>
            <h1 className='font-bold text-2xl'>Quem nós Somos</h1>
            <p className='max-w-[400px]'>
              Somos [Nome do Casal], apaixonados pela moda e pela criação de roupas únicas. Como uma microempresa, dedicamos toda a nossa energia para trazer estilo e qualidade para você. Cada peça é concebida com amor e confeccionada com atenção aos detalhes.

              Nossa missão é oferecer roupas que refletem a individualidade de cada pessoa. Na nossa loja, você encontrará peças feitas com carinho e paixão. Obrigado por se juntar a nós nessa jornada fashion.

              Com carinho,

              [Nome do Casal]
            </p>
          </div>
      </div>
      <h2 className='font-bold text-2xl text-center'>Nosso Time</h2>
      <div className='flex flex-wrap justify-center items-center gap-20 m-10  '>
        <div className='card flex items-center justify-center flex-col max-w-xs'>
            <img src={img} className="rounded-full w-[100px]" />
            <h3>Nome do Membro</h3>
            <p className='w-full'>
              lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel
              lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel
            </p>
        </div>
        <div className='card flex items-center justify-center flex-col max-w-xs'>
            <img src={img} className="rounded-full w-[100px]" />
            <h3>Nome do Membro</h3>
            <p className='w-full'>
              lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel
              lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel
            </p>
        </div>
        <div className='card flex items-center justify-center flex-col max-w-xs'>
            <img src={img} className="rounded-full w-[100px]" />
            <h3>Nome do Membro</h3>
            <p className='w-full'>
              lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel
              lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel lorem lorel
            </p>
        </div>
      </div>

      <Footer/>
    </>
  )
}
