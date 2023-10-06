// Página de Detalhes mais produtos recomendados
import Details from "@/Components/c-details/Details";
import Header from "@/Components/c-header/Header";

import React from 'react'

export default function DetailsPage({product}) {
  return (
    <div>
        <Header />
        <Details product={product}/>
    </div>
  )
}
