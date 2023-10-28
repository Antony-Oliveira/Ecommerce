import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { getImageUrl } from '@/firebase';
import loadingSVG from '@/assets/loadingSVG.svg';
import './Card.css';

export default function Card({ product }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = await getImageUrl(product.image.path);
        setImageUrl(url);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao obter URL da imagem', error);
      }
    }

    fetchData();
  }, [product.image]);

  return (
    <div className="card border-2 hover:shadow-2xl cursor-pointer rounded-xl">
      <div className="image-container">
        {isLoading ? (
          <img src={loadingSVG} alt="Carregando..." className="w-10" />
        ) : (
          <div className="image-wrapper">
            <img src={imageUrl} alt={product.name} />
          </div>
        )}
      </div>
      <div className="desc p-3">
        <span>{product.category}</span>
        <h5 className="text-base font-bold my-1.5">{product.name}</h5>
        <span className="font-normal">Estoque: {product.amount}</span>
        <div className="content flex justify-between relative">
          <h4 className="font-bold my-2">R${product.price}</h4>
          <Link
            href={`${route('product.details', { product: product })}`}
            className="btn text-white stroke-1 bottom-1.5 right-1 hover:opacity-90 border-none outline-none"
          >
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}
