import { useState } from "react";

import Cards from "./Cards.jsx";
import Scoreboard from "./Scoreboard.jsx"

function MainContent() {
    // Game type
    // - Pokémon type
    // - Pokémon subcategory (e.g., starter, legendary, baby)
    const [isInPlay, setIsInPlay] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
    // Use local storage
    const [highScore, setHighScore] = useState(0);

    return (
        <main>
            {/* How to play component */}

            <Scoreboard
                    currentScore={ currentScore }
                    highScore={ highScore } />

            {/* Game type component (only active when game not in play) */}

            <Cards
                    isInPlay={ isInPlay }
                    setIsInPlay={ setIsInPlay }
                    currentScore={ currentScore }
                    setCurrentScore={ setCurrentScore }
                    highScore={ highScore }
                    setHighScore={ setHighScore } />
        </main>
    );
}

export default MainContent;
