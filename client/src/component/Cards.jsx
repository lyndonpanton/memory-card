import { useEffect, useState } from "react";

import Card from "./Card.jsx";

function Cards({ isInPlay, setIsInPlay }) {
    const [categoryData, setCategoryData] = useState([]);
    const [cardListData, setCardListData] = useState([]);
    const [typeId, setTypeId] = useState(1);

    const NUMBER_OF_CARDS = 16;
    
    useEffect(function() {
        const TYPE_ID = Math.floor(Math.random() * 18) + 1;

        fetch("https://pokeapi.co/api/v2/type/" + TYPE_ID)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json()
                }
            }).then(function (data) {
                if (data !== null) {
                    let indexArray = [];

                    for (let i = 0; i < data.pokemon.length; i++) {
                        indexArray[i] = i;
                    }

                    // filter data.pokemon before setting state

                    setCardListData(data.pokemon);

                    // for (let i = 0; i < NUMBER_OF_CARDS; i++) {
                    //     let index =
                    //             Math.floor(Math.random() * indexArray.length);
                    //     // const newCardData =
                    //     //         getCardData(data.pokemon[index].pokemon.url);

                    //     // setCardListData([...cardListData, newCardData]);
                        
                    //     // indexArray.splice(index, 1);

                    //     setCardListData([...cardListData, data.pokemon]);
                    // }
                }
            }).catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <article>
            { cardListData
                ? (
                    cardListData.map(function (cardData) {
                        return (
                            <article key={ crypto.randomUUID() }>
                                <p>Name: { cardData.pokemon.name }</p>
                                <p>Url: { cardData.pokemon.url }</p>
                            </article>
                        )
                    })
                )
                : <p>Loading...</p>
            }
        </article>
    );
}

function getCardData(url) {
    let cardData;

    fetch(url)
        .then(function (response) {
            if (response.status === 200) {
                return response.json();
            }
        }).then(function (data) {
            if (data !== null) {
                cardData = {
                        id: data.id,
                        name: data.species.name[0].toUpperCase()
                                + data.species.name.slice(1),
                        spriteUrl: data.sprites.back_default
                };

                console.log(cardData);
                return cardData;
            }
        }).catch(function (error) {
            console.log(error);
        });
    return cardData;
}

export default Cards;
