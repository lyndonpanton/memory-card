import { useEffect, useState } from "react";

function Cards() {
    const [cardData, setCardData] = useState();
    
    useEffect(function() {
        const TYPE_ID = Math.floor(Math.random() * 19);

        fetch("https://pokeapi.co/api/v2/type/" + TYPE_ID)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json()
                }
            }).then(function (data) {
                if (data !== null) {
                    console.log(data.pokemon);
                }
            }).catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <article>

        </article>
    );
}

export default Cards;
