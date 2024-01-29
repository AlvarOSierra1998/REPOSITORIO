import { useState } from 'react';
import './Cards.css';

const API = "https://deckofcardsapi.com/api/deck/new/draw/?count=4";

const GameBoard = () => {
    const [selectedCards, setSelectedCards] = useState([]);
    const [totalScore, setTotalScore] = useState(0);

    const resetGame = () => {
        setSelectedCards([]);
        setTotalScore(0);
    };

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

                return randomCard;
            } else {
                throw new Error("Error en la respuesta de la API");
            }
        } catch (error) {
            console.error("Error al obtener carta aleatoria:", error);
            return null;
        }
    };

    const handleGetRandomCard = async () => {
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
                resetGame();
            } else if (totalScore === 21) {
                alert("Ganaste");
                resetGame();
            }
        }
    };

    return (
        <div>
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
                <p className='total'>Puntuación Total: {totalScore}</p>
                <button className='boton-random' onClick={handleGetRandomCard}>Pedir</button>
            </div>
        </div>
    );
};

export default GameBoard;
