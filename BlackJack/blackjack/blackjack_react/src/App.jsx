//import { useState,useEffect } from 'react'

import './App.css'
import { useState } from 'react';
import Card from './componentes/Cartas/Cards.jsx';
import Boton from './componentes/Boton/boton_inicio.jsx'
function Tablero() {

  const [botonRandomVisible, setbotonRandomVisible] = useState(false)
  const [botonComenzar, setbotonComenzarVisible] = useState(true)

  const clickComenzar = () => {
    setbotonComenzarVisible(false)
    setbotonRandomVisible(true)
  }
  return (
    <>
      <main>
        <div className='board'>
          {botonComenzar && (
            <Boton onclick={clickComenzar} />
          )}
          {botonRandomVisible && (
            <Boton />
          )}
          <Card />
        </div>
      </main>
    </>
  )

}

export default Tablero
