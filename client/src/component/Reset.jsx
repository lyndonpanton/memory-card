import "../styles/Reset.css";

function Reset({
    setIsInPlay,
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
        setCurrentScore(0);
    }

    function resetGameData() {
        restartGame();

        setShouldReset(true);
        setHighScore(0);
        
        console.log(gameSummary);
        setGameSummary([]);
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
