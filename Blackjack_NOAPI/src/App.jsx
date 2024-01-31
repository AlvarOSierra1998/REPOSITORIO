//import { useState } from 'react'
import { useState } from 'react';
import './App.css'
function App() {

  const [playerHand, setPlayerHand] = useState([])

  const baraja = [
    { nombre: '2_of_clubs.png', valor: 2 },
    { nombre: '3_of_clubs.png', valor: 3 },
    { nombre: '4_of_clubs.png', valor: 4 },
    { nombre: '5_of_clubs.png', valor: 5 },
    { nombre: '6_of_clubs.png', valor: 6 },
    { nombre: '7_of_clubs.png', valor: 7 },
    { nombre: '8_of_clubs.png', valor: 8 },
    { nombre: '9_of_clubs.png', valor: 9 },
    { nombre: '10_of_clubs.png', valor: 10 },
    { nombre: 'jack_of_clubs2.png', valor: 10 },
    { nombre: 'queen_of_clubs2.png', valor: 10 },
    { nombre: 'king_of_clubs2.png', valor: 10 },
    { nombre: 'ace_of_clubs.png', valor: 11 },
    { nombre: '2_of_diamonds.png', valor: 2 },
    { nombre: '3_of_diamonds.png', valor: 3 },
    { nombre: '4_of_diamonds.png', valor: 4 },
    { nombre: '5_of_diamonds.png', valor: 5 },
    { nombre: '6_of_diamonds.png', valor: 6 },
    { nombre: '7_of_diamonds.png', valor: 7 },
    { nombre: '8_of_diamonds.png', valor: 8 },
    { nombre: '9_of_diamonds.png', valor: 9 },
    { nombre: '10_of_diamonds.png', valor: 10 },
    { nombre: 'jack_of_diamonds2.png', valor: 10 },
    { nombre: 'queen_of_diamonds2.png', valor: 10 },
    { nombre: 'king_of_diamonds2.png', valor: 10 },
    { nombre: 'ace_of_diamonds.png', valor: 11 },
    { nombre: '2_of_hearts.png', valor: 2 },
    { nombre: '3_of_hearts.png', valor: 3 },
    { nombre: '4_of_hearts.png', valor: 4 },
    { nombre: '5_of_hearts.png', valor: 5 },
    { nombre: '6_of_hearts.png', valor: 6 },
    { nombre: '7_of_hearts.png', valor: 7 },
    { nombre: '8_of_hearts.png', valor: 8 },
    { nombre: '9_of_hearts.png', valor: 9 },
    { nombre: '10_of_hearts.png', valor: 10 },
    { nombre: 'jack_of_hearts2.png', valor: 10 },
    { nombre: 'queen_of_hearts2.png', valor: 10 },
    { nombre: 'king_of_hearts2.png', valor: 10 },
    { nombre: 'ace_of_hearts.png', valor: 11 },
    { nombre: '2_of_spades.png', valor: 2 },
    { nombre: '3_of_spades.png', valor: 3 },
    { nombre: '4_of_spades.png', valor: 4 },
    { nombre: '5_of_spades.png', valor: 5 },
    { nombre: '6_of_spades.png', valor: 6 },
    { nombre: '7_of_spades.png', valor: 7 },
    { nombre: '8_of_spades.png', valor: 8 },
    { nombre: '9_of_spades.png', valor: 9 },
    { nombre: '10_of_spades.png', valor: 10 },
    { nombre: 'jack_of_spades2.png', valor: 10 },
    { nombre: 'queen_of_spades2.png', valor: 10 },
    { nombre: 'king_of_spades2.png', valor: 10 },
    { nombre: 'ace_of_spades.png', valor: 11 },
  ];

// Función para barajar la baraja de cartas usando el algoritmo Fisher-Yates
  function shuffleDeck(deck) {
  // Crear una copia del array original para evitar modificarlo
  const shuffledDeck = [...deck];

  // Algoritmo de barajado Fisher-Yates
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Intercambiar elementos en los índices i y j
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }

  return shuffledDeck;
}


  return (
    <>
    
        
    </>
  )
}

export default App
