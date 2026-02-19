import { useState } from "react";

import Cards from "./Cards.jsx";

function MainContent() {
    // Game type
    // - Pokémon type
    // - Pokémon subcategory (e.g., starter, legendary, baby)
    const [isInPlay, setIsInPlay] = useState(false);

    return (
        <main>
            {/* How to play component */}

            {/* Scoreboard component */}

            {/* Game type component (only active when game not in play) */}
            <Cards isInPlay={ isInPlay } setIsInPlay={ setIsInPlay } />

            {/* Card component */}
        </main>
    );
}

export default MainContent;
