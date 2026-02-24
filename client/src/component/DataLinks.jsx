import "../styles/DataLinks.css";

import twitterIcon from "../asset/icon/twitter.svg";
import instagramIcon from "../asset/icon/instagram.svg";
import facebookIcon from "../asset/icon/facebook.svg";

function DataLinks(props) {
    return (
        <section className={ "data-links" }>
            <ul className={ "data-links-legal data-links-list" }>
                <li className={ "data-links-item" }>
                    <a className={ "data-links-link" }>
                        Privacy Policy
                    </a>
                </li>
                <li className={ "data-links-item"}>
                    <a className={ "data-links-link" }>
                        Cookies
                    </a>
                </li>
                <li className={ "data-links-item" }>
                    <a className={ "data-links-link" }>
                        Terms And Conditions
                    </a>
                </li>
            </ul>
            <ul className={ "data-links-social data-links-list" }>
                <li className={ "data-links-item" }>
                    <a className={ "data-links-link " }>
                        <img
                                className={ "data-links-icon" }
                                src={ twitterIcon }
                                alt={ "Twitter logo" } />
                    </a>
                </li>
                <li className={ "data-links-item" }>
                    <a className={ "data-links-link " }>
                        <img
                                className={ "data-links-icon" }
                                src={ instagramIcon }
                                alt={ "Instagram logo" } />
                    </a>
                </li>
                <li className={ "data-links-item" }>
                    <a className={ "data-links-link " }>
                        <img
                                className={ "data-links-icon" }
                                src={ facebookIcon }
                                alt={ "Facebook logo" } />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default DataLinks;
