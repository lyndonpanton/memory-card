import "../styles/Reset.css";

function Reset({
    setIsInPlay,
    setHasWon,
    setHasLost,
    setCurrentScore,
    setHighScore,
    setShouldRestart,
    setShouldReset,
    gameSummary,
    setGameSummary
}) {
    function restartGame() {
        setShouldRestart(true);
        setIsInPlay(true);
        setHasWon(false);
        setHasLost(false);
        setCurrentScore(0);
        setGameSummary([]);
    }

    function resetGameData() {
        restartGame();

        setShouldReset(true);
        setHighScore(0);
        
        console.log(gameSummary);
    }

    return (
        <article className={ "reset" }>
            <button
                    className={ "button restart-button" }
                    onClick={ restartGame }>
                Restart Game
            </button>
            <button
                    className={ "button reset-button" }
                    onClick={ resetGameData }>
                Reset Game Data
            </button>
        </article>
    );
}

export default Reset;
