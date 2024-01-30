import { useState } from 'react';
import './Cards.css';

const API = "https://deckofcardsapi.com/api/deck/new/draw/?count=49";

const GameBoard = () => {
    // ESTADOS:
    const [totalScore, setTotalScore] = useState(0);
    const [totalScoreDealer, setTotalScoreDealer] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);
    const [dealerHand, setdealerHand] = useState([]);
    const [oneCards, setoneCards] = useState(false);
    const [playerPlanted, setPlayerPlanted] = useState(false);
    const [hiddenCardUrl, setHiddenCardUrl] = useState('https://www.deckofcardsapi.com/static/img/back.png');

    // RESET DEL GAME
    const resetGame = () => {
        setSelectedCards([]);
        setdealerHand([]);
        setTotalScoreDealer(0);
        setTotalScore(0);
        setPlayerPlanted(false);
        setHiddenCardUrl('https://www.deckofcardsapi.com/static/img/back.png');
    };

    // OBTENER CARTA RANDOM
    const getRandomCard = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();

            if (data.success) {
                const availableCards = data.cards.filter(card => !selectedCards.some(selectedCard => selectedCard.code === card.code));

                if (availableCards.length === 0) {
                    // Todas las cartas han sido seleccionadas, reiniciar la lista
                    resetGame();
                }

                const randomIndex = Math.floor(Math.random() * availableCards.length);
                const randomCard = availableCards[randomIndex];
                // Agregar la carta seleccionada a la lista
                setSelectedCards([...selectedCards, randomCard]);
                // ARRAY TODAS CARTAS console.log(availableCards)
                return randomCard;
            } else {
                throw new Error("Error en la respuesta de la API");
            }
        } catch (error) {
            console.error("Error al obtener carta aleatoria:", error);
            return null;
        }
    };

    // GENERA UNA CARTA ALEATORIA PARA EL DEALER
    const getRandomCarDealer = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();

            if (data.success) {
                const availableCards = data.cards.filter(card => !selectedCards.some(selectedCard => selectedCard.code === card.code));

                if (availableCards.length === 0) {
                    // Todas las cartas han sido seleccionadas, reiniciar la lista
                    resetGame();
                }

                const randomIndex = Math.floor(Math.random() * availableCards.length);
                const randomCard = availableCards[randomIndex];

                //DEALER
                const randomIndexD = Math.floor(Math.random() * availableCards.length);
                const randomCardDEA = availableCards[randomIndexD];

                // Actualizar la URL de la carta oculta del crupier
                setHiddenCardUrl(randomCardDEA.image);

                if (oneCards) {
                    setdealerHand([...dealerHand, randomCard, randomCardDEA[1] === 0]);
                    console.log(dealerHand);
                } else {
                    setdealerHand([...dealerHand, randomCard, randomCardDEA[1] === 0]);
                    console.log(dealerHand);
                }

                console.log(oneCards);

                setoneCards(true);
                // Agregar la carta seleccionada a la lista

                return randomCard;
            } else {
                throw new Error("Error en la respuesta de la API");
            }
        } catch (error) {
            console.error("Error al obtener carta aleatoria:", error);
            return null;
        }
    };

    // PUNTUACION DEALER
    const puntuacionDealer = async () => {
        if (!playerPlanted) {
            alert("¡El jugador debe plantarse antes de que el crupier revele cartas!");
            return;
        }

        let randomCardDEA = await getRandomCarDealer();

        if (randomCardDEA) {
            // Calcular el valor numérico de la carta y sumarlo a la puntuación total
            let cardValueD = parseInt(randomCardDEA.value);
            if (["QUEEN", "KING", "JACK"].includes(randomCardDEA.value)) {
                cardValueD = 10;
            } else if (["ACE"].includes(randomCardDEA.value)) {
                cardValueD = 11;
            }
            // OPERACION QUE SUMA LOS VALORES
            setTotalScoreDealer(totalScoreDealer + (isNaN(cardValueD) ? 0 : cardValueD));

            if (totalScoreDealer > 21) {
                alert("Perdiste");
                resetGame(true);
            } else if (totalScoreDealer === 21) {
                alert("Ganaste");
                resetGame(true);
            }
        }
    };

    // PLANTARSE
    const plantarse = async () => {
        setPlayerPlanted(true);
    };

    // SACA LAS CARTAS ALEATORIAS PARA EL PLAYER
    const handleGetRandomCard = async () => {
        if (playerPlanted) {
            alert("¡El jugador ya se ha plantado!");
            return;
        }

        const randomCard = await getRandomCard();

        if (randomCard) {
            // Calcular el valor numérico de la carta y sumarlo a la puntuación total
            let cardValue = parseInt(randomCard.value);
            if (["QUEEN", "KING", "JACK"].includes(randomCard.value)) {
                cardValue = 10;
            } else if (["ACE"].includes(randomCard.value)) {
                cardValue = 11;
            }

            setTotalScore(totalScore + (isNaN(cardValue) ? 0 : cardValue));

            if (totalScore > 21) {
                alert("Perdiste");
                resetGame(true);
            } else if (totalScore === 21) {
                alert("Ganaste");
                resetGame(true);
            }
        }
    };

    return (
        <div>
            <div>
                <div>
                    <p className='total'>Puntuación Dealer: {totalScoreDealer}</p>
                    <button className='boton-random' onClick={puntuacionDealer}>Pedir Dealer</button>
                    <button className='boton-plantarse' onClick={plantarse}>Plantarse</button>
                </div>
                {dealerHand.map((card, index) => (
                    <div className='container-cards' key={index}>
                        <div>
                            <img
                                className='carta'
                                src={index === 1 ? hiddenCardUrl : card.image}
                                alt="Carta"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div>
                {selectedCards.map((card, index) => (
                    <div className='container-cards' key={index}>
                        <div>
                            <img className='carta' src={card.image} alt="Carta" />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <p className='total'>Puntuación jugador: {totalScore}</p>
                <button className='boton-random' onClick={handleGetRandomCard}>Pedir</button>
            </div>
        </div>
    );
};

export default GameBoard;
