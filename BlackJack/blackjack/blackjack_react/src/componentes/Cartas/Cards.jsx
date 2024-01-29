import { useState } from 'react';
import './Cards.css';

const API = "https://deckofcardsapi.com/api/deck/new/draw/?count=49";



const GameBoard = () => {
    const [totalScore, setTotalScore] = useState(0);
    const [totalScoreDealer, setTotalScoreDealer] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);
    const [dealerHand, setdealerHand] = useState([]);
    const [oneCards, setoneCards] = useState(false);
    //const [link, setLink] = useState(false);



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

    //DEALER

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
 //               const imgHide =randomCardDEA.images.png.value;
  //              alert(imgHide);
                if (oneCards) {
                    setdealerHand([...dealerHand, randomCardDEA])

                } else {
                    setdealerHand([...dealerHand, randomCard, randomCardDEA[1]]);

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

    //PLANTARSE
    const puntuacionDealer = async () => {
        const randomCard = await getRandomCarDealer();

        if (randomCard) {
            // Calcular el valor numérico de la carta y sumarlo a la puntuación total
            let cardValue = parseInt(randomCard.value);
            if (["QUEEN", "KING", "JACK"].includes(randomCard.value)) {
                cardValue = 10;
            } else if (["ACE"].includes(randomCard.value)) {
                cardValue = 11;
            }
            setTotalScoreDealer(totalScoreDealer + (isNaN(cardValue) ? 0 : cardValue));

            if (totalScoreDealer > 21) {
                alert("Perdiste");
                resetGame();
            } else if (totalScoreDealer === 21) {
                alert("Ganaste");
                resetGame();
            }
            
            
            getRandomCarDealer();
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
                <div>
                    <p className='total'>Puntuación Dealer: {totalScoreDealer}</p>
                    <button className='boton-random' onClick={puntuacionDealer}>Pedir Dealer</button>
                    <button className='boton-plantarse'>Plantarse</button>
                </div>
                {dealerHand.map((card, index) => (
                    <div className='container-cards' key={index}>
                        <div>
                            <img
                                className='carta'
                                src={index === 1 ? 'https://www.deckofcardsapi.com/static/img/back.png' : card.image }
                                alt="Carta" />
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