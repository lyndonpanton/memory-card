import "../styles/Cards.css"

import { useEffect, useState } from "react";

import Card from "./Card.jsx";

function Cards({ isInPlay, setIsInPlay }) {
    const [categoryData, setCategoryData] = useState([]);
    const [cardListData, setCardListData] = useState([]);
    const [typeId, setTypeId] = useState(1);

    const NUMBER_OF_CARDS = 15;
    
    useEffect(function() {
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
                }
            }).catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <article className={ "cards" }>
            { cardListData
                ? (
                    cardListData.map(function (cardData) {
                        return <Card cardData={ cardData } />;
                    })
                )
                : <p className={ "cards-loading" }>Loading...</p>
            }
        </article>
    );
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

export default Cards;
