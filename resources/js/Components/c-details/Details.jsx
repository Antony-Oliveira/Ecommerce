import React, { useState } from 'react';
import './Details.css'
import Count from '@/Components/c-count/Count'
import cart from '@/assets/icons/carrinho-de-compra.svg'
import { getImageUrl } from '@/firebase';

function Details({ product }) {
    const [imageUrls, setImageUrls] = useState([]);
    React.useEffect(() => {
        const fetchImageUrls = async () => {
            const urls = await Promise.all(product.images.map(image => getImageUrl(image.path)));
            setImageUrls(urls);
        };

        fetchImageUrls();
    }, [product.images]);

    return (
        <div className='details flex flex-wrap items-center justify-center m-10 gap-10'>
            <div className='left-side'>
                <div className="items">
                    <div className="select-image max-w-[400px] p-1 gap-5">
                        <img src={imageUrls[0]} alt="PHOTO" className='w-full rounded-lg' />
                    </div>
                    <div className="thumbnails flex justify-evenly max-w-[400px] gap-2 p-1">
                        {imageUrls.map((image, index) => (
                            <div className="thumbnail" key={index} onClick={() => handleThumbnailClick(index)}>
                                <img src={image} alt="PHOTO" className='w-full rounded-lg' />
                            </div>
                        ))}
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
                        {/* These low-profile sneakers are yout perfect casual wear companion. Featurin a durable rubber outer sole, They'll withstand everythin the weather can offer. */}
                        {product.details}
                    </p>
                    <div className="price flex flex-col w-full text-[14px]">
                        <p className='price text-[1rem]'>R${product.price}</p>
                        {/* <p className="off text-[12px]">R$250,00</p> */}
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
