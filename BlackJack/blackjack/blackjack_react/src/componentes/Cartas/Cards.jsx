import{ useState } from 'react';

import './Cards.css';

const API = "https://deckofcardsapi.com/api/deck/new/draw/?count=4";

const GameBoard = () => {
    const [selectedCards, setSelectedCards] = useState([]);
    const [newCard, setNewCard] = useState(null);
    const [totalScore, setTotalScore] = useState(0);

    const getRandomCard = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();

            if (data.success) {
                const availableCards = data.cards.filter(card => !selectedCards.includes(card.code));

                if (availableCards.length === 0) {
                    // Todas las cartas han sido seleccionadas, reiniciar la lista
                    setSelectedCards([]);
                }

                const randomIndex = Math.floor(Math.random() * availableCards.length);
                const randomCard = availableCards[randomIndex];

                // Agregar la carta seleccionada a la lista
                setSelectedCards([...selectedCards, randomCard.code]);

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
            setNewCard(randomCard);

            // Calcular el valor numérico de la carta y sumarlo a la puntuación total
            let cardValue = parseInt(randomCard.value);
            if(["QUEEN", "KING", "JACK"].includes(randomCard.value)){
                cardValue = 10;
                
            }else if(["ACE"].includes(randomCard.value)){
                cardValue = 11;
            }else{
                cardValue = parseInt(randomCard.value);
            }
            setTotalScore(totalScore + (isNaN(cardValue) ? 0 : cardValue));
            if(totalScore > 21){
                alert("you lost");
                setTotalScore(cardValue = 0);
                setNewCard(null);
            }else if(totalScore === 21){
                alert("You Win");
                setTotalScore(cardValue = 0);
                setNewCard(null);
            }
        }
    };

    return (
        <div>
            {newCard && (
                <div className='container-cards'>
                    <div>
                        <img className='carta' src={newCard.image} alt="Carta" />
                    </div>

                    <div className='container-description'>
                        <span className='descripcion'>Carta: {newCard.value} de {newCard.suit}.</span>
                        {/* Puedes mostrar otras propiedades de la carta aquí */}
                    </div>
                </div>
            )}
            
            <div>
                <p className='total'>Puntuación Total: {totalScore}</p>
                <button className='boton-random' onClick={handleGetRandomCard}>Pedir</button>
            </div>
            
            {/* Resto del contenido del componente */}
        </div>
    );
};

export default GameBoard;