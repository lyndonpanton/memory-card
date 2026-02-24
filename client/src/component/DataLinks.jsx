import "../styles/DataLinks.css";

import twitterIcon from "../asset/icon/twitter.svg";
import instagramIcon from "../asset/icon/instagram.svg";
import facebookIcon from "../asset/icon/facebook.svg";

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
                    <img src={ twitterIcon } alt={ "Twitter logo" } />
                </li>
                <li>
                    <img src={ instagramIcon } alt={ "Instagram logo" } />
                </li>
                <li>
                    <img src={ facebookIcon } alt={ "Facebook logo" } />
                </li>
            </ul>
        </section>
    )
}

export default DataLinks;
