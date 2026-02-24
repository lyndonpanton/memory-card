import "../styles/Dialog.css";

function Dialog({ isInPlay, hasWon, hasLost, gameSummary }) {
    return (
        isInPlay
            ? null
            : (
                <article>
                    <h3>{ hasWon ? "You Win" : "You Lose" }</h3>
                    <p>
                    </p>
                </article>
            )

    );
}

export default Dialog;
