import React, { useState } from 'react';

function ContadorSubtrator() {
  const [contador, setContador] = useState(0);

  const aumentar= () => {
    setContador(contador + 1);
  };

  const diminuir= () => {
    setContador(contador - 1);
  };

  return (
    <div className="amount flex gap-8">
        <span className="minus no-select font-black cursor-pointer " onClick={diminuir}>-</span>
        <span className='no-select '>{contador <= 0 ? 0 : contador}</span>
        <span className='plus no-select font-black cursor-pointer' onClick={aumentar}>+</span>
    </div>
  );
}

export default ContadorSubtrator;
