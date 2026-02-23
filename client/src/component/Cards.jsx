import "../styles/Cards.css"

import { useEffect, useState } from "react";

import Card from "./Card.jsx";

function Cards({
    isInPlay,
    setIsInPlay,
    currentScore,
    setCurrentScore,
    highScore,
    setHighScore,
    shouldRestart,
    setShouldRestart,
    shouldReset,
    setShouldReset
}) {
    const [categoryData, setCategoryData] = useState([]);
    const [cardListData, setCardListData] = useState([]);
    const [typeId, setTypeId] = useState(1);
    const [isActive, setIsActive] = useState(true);

    const NUMBER_OF_CARDS = 15;
    
    useEffect(createGame, []);

    function createGame() {
        const TYPE_ID = Math.floor(Math.random() * 18) + 1;

        fetch("https://pokeapi.co/api/v2/type/" + TYPE_ID)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json()
                }
            }).then(async function (data) {
                if (data !== null) {
                    const filteredData = await filterCardData(
                        data.pokemon, NUMBER_OF_CARDS
                    );

                    setCardListData(filteredData);
                    setIsInPlay(true);
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

    async function filterCardData(pokemon, numberOfCards) {
        let indexArray = [];

        for (let i = 0; i < pokemon.length; i++) {
            // Filter to only include generation I to V
            indexArray[i] = i;
        }

        let filteredPokemon = [];

        let i = 0;

        while (i < numberOfCards) {
            let index =
                    Math.floor(Math.random() * indexArray.length);
            let newPokemonData =
                    await getCardData(pokemon[index].pokemon.url);

            if (newPokemonData.id > 609) continue;

            let duplicatePokemon = false;

            for (let i = 0; i < filteredPokemon.length; i++) {
                if (newPokemonData.id === filteredPokemon[i].id)
                {
                    duplicatePokemon = true;
                    break;
                }
            }

            if (duplicatePokemon) continue;

            filteredPokemon.push(newPokemonData);
            indexArray.splice(index, 1);
            i = i + 1;
        }

        return filteredPokemon;
    }

    async function getCardData(url) {
        let cardData;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Response failed: " + response.status);
        }

        const result = await response.json();

        cardData = {
            id: result.id,
            name: result.species.name[0].toUpperCase()
                    + result.species.name.slice(1),
            spriteUrl: result.sprites.front_default
        };

        return cardData;
    }

    function createNewGameData() {
        createNewGame();

        setShouldReset(false);
    }

    function createNewGame() {
        setShouldRestart(false);

        createGame();
    }

    function shuffleCards() {
        let newCardOrder = [];
        let oldCardOrder = [...cardListData];
        let indexArray = [];

        // for (let i = 0; i < cardListData.length; i++) {
        //     indexArray[i] = i;
        // }

        // for (let i = 0; i < indexArray.length; i++) {
        //     let index = Math.floor(Math.random() * indexArray.length);

        //     newCardOrder.push(oldCardOrder[index]);
        //     oldCardOrder.splice(index, 1);
        //     // indexArray.splice(index, 1);
        // }

        oldCardOrder.sort(function () {
            return Math.random() - 0.5;
        });

        setCardListData(oldCardOrder);
    }

    if (shouldReset) {
        createNewGameData();
    } else if (shouldRestart) {
        createNewGame();
    }

    return (
        <article className={ "cards" }>
            { cardListData
                ? (
                    cardListData.map(function (cardData) {
                        return <Card
                                key={ cardData.id }
                                cardData={ cardData }
                                isInPlay={ isInPlay }
                                setIsInPlay={ setIsInPlay }
                                isActive={ isActive }
                                setIsActive={ setIsActive }
                                currentScore={ currentScore }
                                setCurrentScore={ setCurrentScore }
                                highScore={ highScore }
                                setHighScore={ setHighScore }
                                shuffleCards={ shuffleCards } />;
                    })
                )
                : <p className={ "cards-loading" }>Loading...</p>
            }
        </article>
    );
}

export default Cards;
