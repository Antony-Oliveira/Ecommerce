import React from 'react';
import icon from '@/assets/icons/carrinho-de-compra.svg'
import { Link } from '@inertiajs/react';
import '@/Components/c-card/Card.css'
import { getImageUrl } from '@/firebase';
import loadingSVG from '@/assets/loadingSVG.svg';
export default function Card({ product }) {
  const [imageUrl, setImageUrl] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const url = await getImageUrl(product.images[0].path);
        setImageUrl(url);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao obter URL da imagem', error);
      }
    }

    fetchData();
  }, [product.images]);

  return (
    <>
      <div className="card border-2 hover:shadow-2xl cursor-pointer rounded-xl">
        <div className='min-h-[300px] flex items-center'>
          {isLoading ? (
            <img src={loadingSVG} alt="Carregando..." className=' w-10' />
          ) : (
            <img src={imageUrl} alt={product.name}/>
          )}
        </div>
        <div className="desc p-3">
          <span>{product.category}</span>
          <h5 className='text-base font-bold my-1.5'>{product.name}</h5>
          <span className='font-normal'>Estoque: {product.amount}</span>
          <div className='content flex justify-between relative'>
            <h4 className='font-bold my-2'>R${product.price}</h4>
            <Link href={`${route('product.details', { product: product })}`} className="btn text-white stroke-1 bottom-1.5 right-1 hover:opacity-90 border-none outline-none">
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
