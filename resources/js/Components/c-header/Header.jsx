import menu from '@/assets/icons/menu.svg'
import bag from '@/assets/icons/shopping-bag.svg'
import './Header.css'
import { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';


export default function Header() {


    const [menuVisible, setMenuVisible] = useState(false);

    // Esta função é chamada quando o botão do menu é clicado
    const toggleMenu = () => {
        setMenuVisible(!menuVisible); // Alterna o estado do menu entre aberto e fechado
    };

    // Adiciona um evento de escuta para detectar cliques fora do menu
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);

        // Retorna uma função para remover o evento de escuta quando o componente é desmontado
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    const refOne = useRef(null);

    const handleClickOutside = (e) => {
        if (!refOne.current.contains(e.target)) {
            setMenuVisible(false);
        }
    }
    const desktop = () => {
        if (menuVisible) {
            console.log(true)
        }
    }

    return (
        <div className='header p-[2%] bg-slate-300 border-x-fuchsia-50 w-full'>
            <div className='flex justify-between w-full'>
                <a href={route('homepage')}>Logo</a>
                <a href="#" className='btn' onClick={(e) => { e.preventDefault(); toggleMenu(); }} ref={refOne}>
                    <img src={menu} alt="Menu" className='w-5' />
                </a>
                <ul className='nav'>
                    <li><Link href={`${route('homepage')}`} className="link" >Home</Link></li>
                    <li><Link href={`${route('aboutpage')}`} className="link">About</Link></li>
                    <li><Link href={`${route('storepage')}`} className="link">Store</Link></li>
                    <li><Link href={`${route('contactpage')}`} className="link">Contact</Link></li>
                    <li><Link href={`${route('shoppingpage')}`} className="link"><img src={bag} alt="Shopping" className='w-8' /></Link></li>
                </ul>
                <ul className='nav-mobile' style={{
                    visibility: menuVisible ? 'visible' : 'hidden',
                    overflowY: menuVisible ? 'auto' : 'hidden',
                    height: menuVisible ? '100vh' : '0',

                }}>
                    <li><Link href={`${route('homepage')}`} className="link" >Home</Link></li>
                    <li><Link href={`${route('aboutpage')}`} className="link">About</Link></li>
                    <li><Link href={`${route('storepage')}`} className="link">Store</Link></li>
                    <li><Link href={`${route('contactpage')}`} className="link">Contact</Link></li>
                    <li><Link href={`${route('shoppingpage')}`} className="link"><img src={bag} alt="Shopping" className='w-8' /></Link></li>
                </ul>
            </div>

        </div>
    )
}
