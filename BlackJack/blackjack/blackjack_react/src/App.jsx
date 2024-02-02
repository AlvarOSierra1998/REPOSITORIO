//import { useState,useEffect } from 'react'

import './App.css'

import Card from './componentes/Cartas/Cards.jsx';

function Tablero() {

 
  return (
    <>
      <main>
        <div className='board'>
          <Card />
          <div className="carta-hueco"></div>
          <div className="carta-hueco2"></div>
          <div className="carta-hueco3"></div>
          <div className="carta-huecoCrupier1"></div>
          <div className="carta-huecoCrupier2"></div>
        </div>
      </main>
    </>
  )

}

export default Tablero
