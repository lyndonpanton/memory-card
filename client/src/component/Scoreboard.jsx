function Scoreboard(props) {
    let { currentScore, highScore } = props;

    return (
        <article>
            <p>Current Score: { currentScore }</p>
            <p>High Score: { highScore }</p>
        </article>
    );
}

export default Scoreboard;
