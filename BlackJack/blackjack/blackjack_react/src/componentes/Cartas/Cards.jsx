import { useEffect, useState } from 'react';
import './Cards.css';

const baraja_inicial = [
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

const GameBoard = () => {
    const [totalScore, setTotalScore] = useState(0);
    const [totalScoreDealer, setTotalScoreDealer] = useState(0);
    const [CartaMostrarDealer, setCartaMostrarDealer] = useState(false);
    const [PlayerHand, setPlayerHand] = useState([]);
    const [barajada, setBarajada] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);
    const [gameInProgress, setGameProgress] = useState(true);
    const [message, setMessage] = useState(false);
    const [restart, setRestart] = useState(false);
    /* const resetGame = () => {
         setSelectedCards([]);
         setDealerHand([]);
         setTotalScoreDealer(0);
         setTotalScore(0);
         setPlayerPlanted(false);
         setOneCards(false);
     };*/

    // Función para barajar la baraja de cartas usando el algoritmo Fisher-Yates
    useEffect(() => {
        const baraja = shuffleDeck([...baraja_inicial]);
        setBarajada(baraja);

        const CartaInical = [baraja.pop()];
        setPlayerHand(CartaInical);

        const CartaInicalDealer = [baraja.pop(), { nombre: 'https://www.deckofcardsapi.com/static/img/back.png', valor: 0 }];
        setDealerHand(CartaInicalDealer);

        setTotalScore(calculateScore(CartaInical));
        setTotalScoreDealer(calculateScore(CartaInicalDealer));

    }, [gameInProgress])




    const calculateScore = (cards) => {

        return cards.reduce((total, card) => total + card.valor, 0);
    };




    const plantarse = () => {

        setCartaMostrarDealer(true);

        let dealerHandle = [...dealerHand];

        let suma;

        if (dealerHand.some(card => card.valor === 0)) {
            dealerHandle = dealerHandle.slice(0, 1).concat(dealerHandle.slice(2));
            const cardD = barajada.pop();
            dealerHandle.push(cardD);
            setDealerHand(dealerHandle);
            suma = calculateScore(dealerHandle);
            setTotalScoreDealer(suma);
            setGameProgress(false);
            setRestart(true);
        }

        while (suma < 17) {
            const card = barajada.pop();
            dealerHandle = [...dealerHandle, card];
            setDealerHand(dealerHandle);
            suma = calculateScore(dealerHandle);
            setTotalScoreDealer(suma);
            setGameProgress(false);
            setRestart(true);

        }
        //preguntar
        compareScores(suma);

        const res = compareScores(suma);
        setMessage([...message, res]);
        setGameProgress(false);
        setRestart(true);

    };

    const compareScores = (suma) => {
        if (totalScore === 21) {
            // Blackjack del jugador
            return alert("¡Blackjack! El jugador gana.");

        } else if (suma === 21) {
            // Blackjack del crupier
            return alert("¡Blackjack! El crupier gana.");
        } else if (totalScore > 21) {
            // El jugador ha perdido
            return alert("¡Te has pasado de 21! ¡Has perdido.");
        } else if (suma > 21) {
            // El crupier ha perdido
            return alert("El crupier ha perdido.");
        } else if (totalScore > suma) {
            // El jugador gana
            return alert("El jugador gana.");
        } else if (suma > totalScore) {
            // El crupier gana
            return alert("El crupier gana.");
        } else {
            // Empate
            return alert("¡Es un empate!");
        }

    };


    //pedir carta jugador
    const handleGetRandomCard = () => {


        const card = barajada.pop(); // Sacar una carta del mazo barajado
        const updatedPlayerCards = [...PlayerHand, card]; // Añadir la carta extra a la mano del jugador
        // Calcular la puntuación del jugador con la nueva carta
        const updatedPlayerScore = calculateScore(updatedPlayerCards);

        // Verificar si el jugador se ha pasado de 21
        if (updatedPlayerScore > 21) {
            setPlayerHand([...PlayerHand, card]);

            alert("perdiste")
            setTotalScore(updatedPlayerScore);
            //botones 
            setGameProgress(false);
            setRestart(true);
            // Aquí puedes manejar la lógica para indicar al jugador que ha perdido, como actualizar el estado o mostrar un mensaje al usuario
        } else {
            setTotalScore(updatedPlayerScore);
            setPlayerHand([...PlayerHand, card]); // Actualizar la mano del jugador solo si no se ha pasado de 21
        }

    };


    const pedir_dealer = () => {
        const cardD = barajada.pop();
        const updateDealerCards = [...dealerHand, cardD];
        const updateScoreDealer = calculateScore(updateDealerCards);

        // Verificar si el jugador se ha pasado de 21
        if (updateScoreDealer > 21) {
            setDealerHand([...dealerHand, cardD]);
            //botones 
            alert("El dealer ha perdido")

            setGameProgress(false);
            setRestart(true);

            setTotalScore(updateScoreDealer);
        }
        setTotalScoreDealer(updateScoreDealer);
        setDealerHand(updateDealerCards);

    }
    const handleRestart = () => {
        setGameProgress(true);
        setRestart(false);
        setCartaMostrarDealer(false);
        setPlayerHand([]);
        setDealerHand([]);
        setBarajada([]);
        setTotalScore(0);
        setTotalScoreDealer(0);

    }

    return (
        <div>


            <div className="root">
                <div>
                    <div className='cardsFlex'>
                        <h2>Puntuación del Crupier: {totalScoreDealer}</h2>
                        {/* Mostrar las cartas del crupier, ocultando la primera carta si aún no se ha revelado */}
                        {dealerHand.map((card, index) => (
                            <img
                                key={index}
                                src={`../assets/img/${index === 1 && !CartaMostrarDealer ? 'back.png' : card.nombre}`}
                                alt={card.nombre}
                                style={{ width: '100px', height: '150px' }}
                            />
                        ))}

                    </div>
                    <div>
                        {/* Botones para pedir una carta adicional ("hit") o plantarse */}

                        <button className='boton-p' onClick={pedir_dealer} disabled={!gameInProgress}>Pedir carta crupier</button>
                        {restart &&
                            <button className='boton-p' onClick={handleRestart}>Reiniciar Partida</button>}
                    </div>
                    <div className='cardsFlex'>
                        <h2>Puntuación del Jugador: {totalScore}</h2>
                        {/* Mostrar las cartas del jugador */}
                        {PlayerHand.map((card, index) => (
                            <img
                                key={index}
                                src={`../assets/img/${card.nombre}`}
                                alt={card.nombre}
                                style={{ width: '100px', height: '150px' }}
                            />
                        ))}
                        <br></br>
                        <button className='button-p' onClick={handleGetRandomCard} disabled={!gameInProgress}>Pedir carta</button>
                        <button className='button-p' onClick={plantarse} disabled={!gameInProgress}>Plantarse</button>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    );

}

export default GameBoard;
