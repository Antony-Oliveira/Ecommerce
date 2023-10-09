// Página de Detalhes mais produtos recomendados
import Details from "@/Components/c-details/Details";
import Header from "@/Components/c-header/Header";
import Card from "@/Components/c-card/Card";
import { More } from "@/Components/c-more/More";
import Footer from "@/Components/footer/Footer";

import React from 'react'

export default function DetailsPage({product , products}) {
  return (
    <div>
        <Header />
        <Details product={product}/>
        <More />
        <div className="flex justify-center flex-wrap gap-10 section-p1">
          {Array.isArray(products) ? (
            products.map((product) => <Card key={product.id} product={product} />)
          ) : (
            // Trate o caso em que products não é um array
            // Pode ser uma mensagem de erro, um componente alternativo, etc.
            <p>Products não é um array válido.</p>
          )}
        </div>
        <Footer /> 
    </div>
  )
}
