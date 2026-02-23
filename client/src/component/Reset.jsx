import { useState } from "react";

function Reset({
    setIsInPlay,
    setCurrentScore,
    setHighScore,
    setShouldRestart,
    setShouldReset
}) {
    function restartGame() {
        setShouldRestart(true);
        setIsInPlay(true);
        setCurrentScore(0);
    }

    function resetGameData() {
        restartGame();
        setShouldReset(true);
        setHighScore(0);
    }

    return (
        <article>
            <button onClick={ restartGame }>Restart Game</button>
            <button onClick={ resetGameData }>Reset Game Data</button>
        </article>
    );
}

export default Reset;
