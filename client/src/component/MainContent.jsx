import { useState } from "react";

import HowToPlay from "./HowToPlay.jsx";
import Scoreboard from "./Scoreboard.jsx"
import Cards from "./Cards.jsx";
import Reset from "./Reset.jsx";

function MainContent() {
    // Game type
    // - Pokémon type
    // - Pokémon subcategory (e.g., starter, legendary, baby)
    const [isInPlay, setIsInPlay] = useState(false);
    const [shouldRestart, setShouldRestart] = useState(false);
    const [shouldReset, setShouldReset] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
    // Use local storage
    const [highScore, setHighScore] = useState(0);
    const [gameSummary, setGameSummary] = useState([]);

    return (
        <main>
            <HowToPlay />

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
                    setHighScore={ setHighScore }
                    shouldRestart={ shouldRestart }
                    setShouldRestart={ setShouldRestart }
                    shouldReset={ shouldReset }
                    setShouldReset={ setShouldReset }
                    gameSummary={ gameSummary }
                    setGameSummary={ setGameSummary }/>

            <Reset
                setIsInPlay={ setIsInPlay }
                setCurrentScore={ setCurrentScore }
                setHighScore={ setHighScore }
                shouldRestart={ shouldRestart }
                setShouldRestart={ setShouldRestart }
                setShouldReset={ setShouldReset }
                gameSummary={ gameSummary }
                setGameSummary={ setGameSummary } />
        </main>
    );
}

export default MainContent;
