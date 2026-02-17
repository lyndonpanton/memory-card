import { useEffect, useState } from "react";

function MainContent() {
    const [cardData, setCardData] = useState();
    
    // Should be re-rendered with component if player restarts game
    useEffect(function() {
        // Generate random number for type (0 - 18)
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
        <main>
            <h2>Pokémon Memory Card Game</h2>

            {/* How to play component */}

            {/* Scoreboard component */}

            {/* Card component */}
        </main>
    );
}

export default MainContent;
