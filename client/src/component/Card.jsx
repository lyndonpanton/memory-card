import "../styles/Card.css";

import { useState } from "react";

function Card({ cardData, isInPlay, setIsInPlay, isActive, setIsActive }) {
    const [isChosen, setIsChosen] = useState(false);

    function handleCardClick(e) {
        if (isInPlay) {
            if (isChosen) {
                // game over
                setIsInPlay(false);
            } else {
                if (!isActive) {
                    setIsChosen(true);

                    let id;

                    if (e.target.tagName === "ARTICLE") {
                        id = e.target.getAttribute("dataid");
                        e.target.classList.add("card-selected");
                    } else {
                        id = e.target.parentElement.getAttribute("dataid");
                        e.target.parentElement.classList.add("card-selected");
                    }

                    // shuffle cards after 1.75 seconds...
                    setIsActive(true);

                    setTimeout(resetIsActive, 1750);

                    console.log(id);
                }
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
