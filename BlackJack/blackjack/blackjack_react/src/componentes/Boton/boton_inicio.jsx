// Importa React y el estilo CSS
import { useState } from 'react';
import './Boton.css';
//import Card from '../Cartas/Cards.jsx' // Asegúrate de tener el archivo Boton.css en el mismo directorio que este archivo
// Componente del botón

//import App from '../../App.jsx'

const Boton = () => {

    const [boton, setBoton] = useState(true);
    const botonOnOff = () => {
        setBoton(!boton)
    }
    return(
        <div>
            
            {boton &&(
                <button onClick={botonOnOff}  className='boton-random'>Comenzar Partida</button>
            )}
        </div>
    )
};


export default Boton;
