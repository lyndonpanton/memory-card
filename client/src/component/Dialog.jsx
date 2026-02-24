import "../styles/Dialog.css";

function Dialog({ isInPlay, hasWon, hasLost, gameSummary }) {
    let summary = "";

    for (let i = 0; i < gameSummary.length; i++) {
        if (i === gameSummary.length - 1) {
            summary += gameSummary[i];
        } else {
            summary += gameSummary[i] + ", ";
        }
    }

    return (
        isInPlay
            ? null
            : (
                <article>
                    <h3>{ hasWon ? "You Win" : "You Lose" }</h3>
                    <p>Pick order: { summary }</p>
                </article>
            )

    );
}

export default Dialog;
