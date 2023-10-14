import Header from "@/Components/c-header/Header"
import Banner from "@/Components/c-banner/Banner"
import Footer from "@/Components/footer/Footer"
import { More } from "@/Components/c-more/More"
import Card from "@/Components/c-card/Card"
import { useState } from 'react';

const Homepage = ({ products }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Header />
            <Banner />
            <div className="flex justify-center flex-wrap gap-10 section-p1">
                <h2 className='h2-title pb-2'>Produtos em Estoque</h2>
                <p className='text-center pb-5'>Coleção Verão Nova Moda</p>
                <div className="flex flex-wrap justify-center gap-10">
                    {products.map((product) => (<Card key={product.id} product={product} />))}
                </div>
            </div>
            <More />
            <div className="flex justify-center flex-wrap gap-10 section-p1">
                {products.map((product) => (<Card key={product.id} product={product} />))}
            </div>

            <Footer />
            {/* <button onClick={() => setIsOpen(true)}>Abrir Diálogo</button> */}

        </>
    )
}

export default Homepage;
