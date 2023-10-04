import React from 'react'
import './Footer.css'
import img from '@/assets/pay.png';

export default function Footer() {
  return (
    <div className='footer flex flex-wrap justify-center gap-10 section-p1'>
        <div className="col">
            <h1>LOGO</h1>
            <h4>Contato</h4>
            <p><strong>Endereço:</strong> 562 Welligton Road, Street 32, San Francisco</p>
            <p><strong>Contato:</strong> +01 2222 365 /(+99) 01 2345 6789</p>
            <p><strong>Horario:</strong>  10:00 - 18:00, Mon - Sat</p>
            <div className="follow mt-10">
                <h2>Siga-nos nas redes sociais</h2>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            <p>Informações de Entrega</p>
            <p>Política de Privacidade</p>
            <p>Termos e Condições</p>
            <p>Entre em Contato conosco</p>
        </div>
        <div className="col">
            <h4>Minha Conta</h4>
            <p>Carrinho de Compras</p>
            <p>Acompanhar meu Pedido</p>
            <p>Ajuda</p>
        </div>
        <div className='col'>
            <h4 className='mb-5'>Secured Payment Gateways</h4>
            <img src={img} alt="" />
        </div>
        <div className="copy">
            <p className='text-center'>© 2023. Breno Nogueira - React Ecommerce Template</p>
        </div>
    </div>
  )
}
