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
        <Footer />
    </div>
  )
}
