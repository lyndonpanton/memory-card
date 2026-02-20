function HowToPlay() {
    return (
        <section className={ "how-to-play" }>
            <h2 className={ "how-to-play-heading" }>How To Play</h2>
            <p className={ "how-to-play-instructions" }>
                You are given 15 card each with a unique image and name on them.
                Every time you pick a card, the order of the cards will be
                reshuffled. You must try to only pick cards that you have not
                already picked in the same game, and your score increases by one
                for every card you pick that has not been picked before. To win
                the game, you must pick fifteen unique cards in a row. If you
                pick a card that has already been chosen before in the same
                game, you lose the game, and can restart to try again.
            </p>
        </section>
    );
}

export default HowToPlay;
