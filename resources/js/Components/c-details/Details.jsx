import React, { useState } from 'react';
import './Details.css'
import Count from '@/Components/c-count/Count'
import cart from '@/assets/icons/carrinho-de-compra.svg'
import { getImageUrl } from '@/firebase';
import ImageGallery from '@/Components/DetailsCarousel/ImageGallery';
import loading from "slick-carousel/slick/ajax-loader.gif"

function Details({ product }) {
    const [imageUrls, setImageUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        console.log("Details renderizado")
        const fetchImageUrls = async () => {
            const urls = await Promise.all(product.images.map(image => getImageUrl(image.path)));
            setImageUrls(urls);
            setIsLoading(false);
        };

        fetchImageUrls();
    }, [product.images]);

    return (
        <div className='details flex flex-wrap items-center justify-center m-10 gap-10'>
            <div className='left-side'>
                <div className="items">
                    <div className="select-image max-w-[400px]  p-10 gap-5">
                        {isLoading ? <img src={loading} className='justify-center'></img> : <ImageGallery images={imageUrls}></ImageGallery>}
                    </div>
                </div>

            </div>
            <div className="right-side max-w-[400px] ">
                <div className='content flex flex-col gap-4 w-full'>
                    <h6 className="font-semibold">Company Name</h6>
                    <h1 className="font-bold">{product.name}</h1>
                    <label htmlFor="Tamanho" className='flex items-center gap-2'>
                        Tamanho:
                        <select name="Tamanho" defaultValue="P" className='outline-none border-2 p-2 rounded-[10px] font-bold w-16'>
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="orange">G</option>
                        </select>
                    </label>
                    <p>
                        {product.details}
                    </p>
                    <div className="price flex flex-col w-full text-[14px]">
                        <p className='price text-[1rem]'>R${product.price}</p>
                    </div>
                    <div className="options flex items-center gap-5">
                        <Count />
                        <a href="#" className='flex items-center no-select' draggable={false}>
                            <button>
                                <img src={cart} alt="cart" draggable={false} />
                                Adicionar ao Carrinho
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Details;
