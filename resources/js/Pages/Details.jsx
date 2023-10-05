import Header from "@/Components/c-header/Header";
import { useEffect } from "react";

const Details = ({ product }) => {
    useEffect(() => {
        console.log(product);
    }, []);

    return (
        <>
        <Header></Header>
        <div className="bg-white rounded-lg shadow-lg p-4 w-72">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
                <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
                <p className="text-gray-600 text-sm mb-2">Categoria: {product.category}</p>
                <p className="text-gray-600 text-sm mb-2">Preço: R${product.price},00</p>
                <p className="text-gray-700">{product.details}</p>
            </div>
        </div>
        </>
    )
}

export default Details;
