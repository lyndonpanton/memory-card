import "../styles/Scoreboard.css";

function Scoreboard(props) {
    let { currentScore, highScore } = props;

    return (
        <article className={ "scoreboard" }>
            <p className={ "scoreboard-score-current" }>
                Current Score:
                <span className={"scoreboard-score-current-number"}> { currentScore }</span>
            </p>
            <p className={ "scoreboard-score-high" }>
                High Score:
                <span className={"scoreboard-score-high-number"}> { highScore }</span>
            </p>
        </article>
    );
}

export default Scoreboard;
