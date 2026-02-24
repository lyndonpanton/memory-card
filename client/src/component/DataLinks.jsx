import "../styles/DataLinks.css";

function DataLinks(props) {
    return (
        <section className={ "data-links" }>
            <ul className={ "data-links-legal" }>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>Terms And Conditions</li>
            </ul>
            <ul className={ "data-link-social" }>
                <li>
                    <img src={ "" } alt={ "" } />
                </li>
                <li>
                    <img src={ "" } alt={ "" } />
                </li>
                <li>
                    <img src={ "" } alt={ "" } />
                </li>
            </ul>
        </section>
    )
}

export default DataLinks;
