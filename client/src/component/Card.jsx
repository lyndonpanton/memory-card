import "../styles/Card.css";

function Card(props) {
    // const [isChosen, setIsChosen] = useState(false);

    return (
        <article className="card" key={ props.cardData.id }>
            <img src={ props.cardData.spriteUrl }
                alt={"The pokémon " + props.cardData.name }
                className={ "card-sprite" }/>
            <p className={ "card-name" }>{ props.cardData.name }</p>
        </article>
    );
}

export default Card;
