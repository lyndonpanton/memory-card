import "../styles/Card.css";

import { useState } from "react";

function Card({
    cardData,
    isInPlay,
    setIsInPlay,
    setHasWon,
    setHasLost,
    isActive,
    setIsActive,
    currentScore,
    setCurrentScore,
    highScore,
    setHighScore,
    shuffleCards,
    gameSummary,
    setGameSummary,
    numberOfCards
}) {
    const [isChosen, setIsChosen] = useState(false);

    function handleCardClick(e) {
        if (isInPlay) {
            if (isChosen) {
                // game over
                setIsInPlay(false);
                setHasLost(true);
                setGameSummary([...gameSummary, cardData.name]);
            } else {
                // if (isActive) {
                setIsChosen(true);

                let id;

                if (e.target.tagName === "ARTICLE") {
                    id = e.target.getAttribute("dataid");
                    // e.target.classList.add("card-selected");
                } else {
                    id = e.target.parentElement.getAttribute("dataid");
                    // e.target.parentElement.classList.add("card-selected");
                }

                if (numberOfCards === currentScore + 1) {
                    setIsInPlay(false);
                    setHasWon(true);
                }
                else
                {
                    shuffleCards();
                }

                if (currentScore + 1 > highScore) {
                    setHighScore(currentScore + 1);
                }

                setCurrentScore(currentScore + 1);
                setGameSummary([...gameSummary, cardData.name]);

                // setIsActive(false);

                // setTimeout(() => { setIsActive(true); }, 1750);
            }
        }
    }

    return (
        <article
                className="card"
                key={ cardData.id }
                dataid={ cardData.id }
                onClick={ (e) => handleCardClick(e) }>
            <img src={ cardData.spriteUrl }
                alt={"The pokémon " + cardData.name }
                className={ "card-sprite" }/>
            <p className={ "card-name" }>{ cardData.name }</p>
        </article>
    );
}

export default Card;
