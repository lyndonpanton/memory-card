import "../styles/DataLinks.css";

import twitterIcon from "../asset/icon/twitter.svg";
import instagramIcon from "../asset/icon/instagram.svg";
import facebookIcon from "../asset/icon/facebook.svg";

function DataLinks(props) {
    return (
        <section className={ "data-links" }>
            <ul className={ "data-links-legal data-links-list" }>
                <li className={ "data-links-item" }>
                    <a
                            className={ "data-links-link" }
                            href={ "https://en.wikipedia.org/wiki/Privacy_policy" }
                            target={ "_blank" }>
                        Privacy Policy
                    </a>
                </li>
                <li className={ "data-links-item" }>
                    <a
                            className={ "data-links-link" }
                            href={ "https://en.wikipedia.org/wiki/HTTP_cookie" }
                            target={ "_blank" }>
                        Cookies
                    </a>
                </li>
                <li className={ "data-links-item" }>
                    <a
                            className={ "data-links-link" }
                            href={ "https://en.wikipedia.org/wiki/Contractual_term" }
                            target={ "_blank" }>
                        Terms And Conditions
                    </a>
                </li>
            </ul>
            <ul className={ "data-links-social data-links-list" }>
                <li className={ "data-links-item" }>
                    <a
                            className={ "data-links-link " }
                            href={ "https://twitter.com" }
                            target={ "_blank" }>
                        <img
                                className={ "data-links-icon" }
                                src={ twitterIcon }
                                alt={ "Twitter logo" } />
                    </a>
                </li>
                <li className={ "data-links-item" }>
                    <a
                            className={ "data-links-link " }
                            href={ "https://www.instagram.com/" }
                            target={ "_blank" }>
                        <img
                                className={ "data-links-icon" }
                                src={ instagramIcon }
                                alt={ "Instagram logo" } />
                    </a>
                </li>
                <li className={ "data-links-item" }>
                    <a
                            className={ "data-links-link " }
                            href={ "https://www.facebook.com/" }
                            target={ "_blank" }>
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
