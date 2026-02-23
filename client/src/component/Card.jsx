import "../styles/Card.css";

import { useState } from "react";

function Card({
    cardData,
    isInPlay,
    setIsInPlay,
    isActive,
    setIsActive,
    currentScore,
    setCurrentScore,
    highScore,
    setHighScore,
    shuffleCards,
    gameSummary,
    setGameSummary
}) {
    const [isChosen, setIsChosen] = useState(false);

    function handleCardClick(e) {
        if (isInPlay) {
            if (isChosen) {
                // game over
                setIsInPlay(false);
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

                if (currentScore + 1 > highScore) {
                    setHighScore(currentScore + 1);
                }

                setCurrentScore(currentScore + 1);
                setGameSummary([...gameSummary, cardData.name]);

                // shuffle cards after 1.75 seconds...
                // setIsActive(false);
                shuffleCards();

                // setTimeout(() => { setIsActive(true); }, 1750);

                // use id array in cards component to confirm whether this
                // card has been picked before...

                // }
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
