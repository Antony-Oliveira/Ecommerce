import menu from '@/assets/icons/menu.svg'
import '../c-header/Header.css'
import { useState, useEffect, useRef } from 'react';

export default function Header() {


  const [menuVisible, setMenuVisible] = useState(false);

  // Esta função é chamada quando o botão do menu é clicado
  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Alterna o estado do menu entre aberto e fechado
  };

  // Adiciona um evento de escuta para detectar cliques fora do menu
  useEffect (() => {
    document.addEventListener("click", handleClickOutside, true);

    // Retorna uma função para remover o evento de escuta quando o componente é desmontado
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const refOne = useRef(null);

  // Esta função é chamada quando ocorre um clique em qualquer parte do documento
  const handleClickOutside = (e) => {
    // Verifica se o clique não ocorreu dentro do elemento referenciado por refOne (o botão do menu)
    if (!refOne.current.contains(e.target)) {
      setMenuVisible(false); // Fecha o menu quando clicar fora dele
    }
  }

  const desktop = () => {
    if(menuVisible){
      console.log(true)
    }
  }

  return (
    <div className='header flex justify-between p-[2%] bg-slate-300 border-x-fuchsia-50 '>
      <h1>Logo</h1>
      <div className="menu-desktop">
        <ul className='nav flex gap-3'>
          <li><a href="a">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Carrinho</a></li>
          <li><a href="#">Conta</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
      <div className="menu" >
        <a href="#" className='btn' onClick={toggleMenu} ref={refOne}>
          <img src={menu} alt="Menu" className='w-5' />
        </a>
        <ul
            className='nav bg-slate-300 gap-2'
            style={{
              visibility: menuVisible ? 'visible' : 'hidden',
              overflow: menuVisible ? 'auto' : '',
              height: menuVisible ? '100vh' : '0'
            }}
        >
          {/* Conteúdo do menu que aparece quando o botão é clicado */}
          <li><a href="/a">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Carrinho</a></li>
          <li><a href="#">Conta</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
    </div>
  )
}
