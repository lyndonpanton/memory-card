import { useState } from "react";

import HowToPlay from "./HowToPlay.jsx";
import Scoreboard from "./Scoreboard.jsx"
import Cards from "./Cards.jsx";
import Dialog from "./Dialog.jsx";
import Reset from "./Reset.jsx";

function MainContent() {
    // Game type
    // - Pokémon type
    // - Pokémon subcategory (e.g., starter, legendary, baby)
    const [isInPlay, setIsInPlay] = useState(false);
    const [hasWon, setHasWon] = useState(false);
    const [hasLost, setHasLost] = useState(false);
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

            <section id="game">
                <Cards
                        isInPlay={ isInPlay }
                        setIsInPlay={ setIsInPlay }
                        hasWon={ hasWon }
                        setHasWon={ setHasWon }
                        hasLost={ hasLost }
                        setHasLost={ setHasLost }
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
                <Dialog
                        isInPlay={ isInPlay }
                        hasWon={ hasWon }
                        hasLost={ hasLost }
                        gameSummary={ gameSummary } />
            </section>

            <Reset
                setIsInPlay={ setIsInPlay }
                setHasWon={ setHasWon }
                setHasLost={ setHasLost }
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
