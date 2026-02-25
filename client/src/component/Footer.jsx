import twitterIcon from "../asset/icon/twitter.svg";
import instagramIcon from "../asset/icon/instagram.svg";
import facebookIcon from "../asset/icon/facebook.svg";

import "../styles/Footer.css";

import ProjectLinks from "./ProjectLinks.jsx";
import DataLinks from "./DataLinks.jsx";
import Copyright from "./Copyright.jsx";

function Footer() {
    const PROJECT_INFORMATION = [
        {
            title: "Developer Information",
            data: [
                {
                    title: "Portfolio",
                    link: "https://lyndonpanton.co.uk/"
                },
                {
                    title: "GitHub",
                    link: "https://github.com/lyndonpanton"
                },
                {
                    title: "LinkedIn",
                    link: "https://www.linkedin.com/in/lyndonpanton"
                }
            ]
        },
        {
            title: "Languages and Frameworks",
            data: [
                {
                    title: "ReactJS",
                    link: "https://react.dev/"
                },
                {
                    title: "HTML",
                    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                },
                {
                    title: "CSS",
                    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                },
                {
                    title: "JavaScript",
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                }
            ]
        },
        {
            title: "Managers, Packages, and APIs",
            data: [
                {
                    title: "npm",
                    link: "https://www.npmjs.com/"
                },
                {
                    title: "PokéAPI",
                    link: "https://pokeapi.co/"
                },
                {
                    title: "Fontawesome",
                    link: "https://fontawesome.com/"
                }
            ]
        },
        {
            title: "More Projects",
            data: [
                {
                    title: "Artist's Homepage",
                    link: "https://lyndonpanton.github.io/homepage/"
                },
                {
                    title: "Weather App",
                    link: "https://lyndonpanton.github.io/weather-app/"
                },
                {
                    title: "Linked List Implementation",
                    link: "https://lyndonpanton.github.io/linked-lists/"
                },
                {
                    title: "Recursion Implementation",
                    link: "https://lyndonpanton.github.io/recursion/"
                }
            ]
        }
    ];

    const DATA_INFORMATION = [
        {
            title: "legal",
            data: [
                {
                    title: "Privacy Policy",
                    link: "https://en.wikipedia.org/wiki/Privacy_policy",
                    newTab: true,
                    usesIcon: false,
                    icon: null
                },
                {
                    title: "Cookies",
                    link: "https://en.wikipedia.org/wiki/HTTP_cookie",
                    newTab: true,
                    usesIcon: false,
                    icon: null
                },
                {
                    title: "Terms and Conditions",
                    link: "https://en.wikipedia.org/wiki/Contractual_term",
                    newTab: true,
                    usesIcon: false,
                    icon: null
                }
            ],
        },
        {
            title: "social",
            data: [
                {
                    title: "Twitter",
                    link: "https://twitter.com",
                    newTab: true,
                    usesIcon: true,
                    icon: twitterIcon
                },
                {
                    title: "Instagram",
                    link: "https://www.instagram.com/",
                    newTab: true,
                    usesIcon: true,
                    icon: instagramIcon
                },
                {
                    title: "Facebook",
                    link: "https://www.facebook.com/",
                    newTab: true,
                    usesIcon: true,
                    icon: facebookIcon
                }
            ]
        }
    ];

    const COPYRIGHT_YEAR = new Date().getFullYear();
    const COPYRIGHT_RIGHTS_HOLDER = "Lyndon Mykal Panton";
    const COPYRIGHT_RIGHTS_TYPE = "All Rights Reserved";

    return (
        <footer>
            <ProjectLinks data={ PROJECT_INFORMATION } />
            <DataLinks data={ DATA_INFORMATION } />
            <Copyright
                year={ COPYRIGHT_YEAR }
                rightsHolder={ COPYRIGHT_RIGHTS_HOLDER }
                rightsType={ COPYRIGHT_RIGHTS_TYPE } />
        </footer>
    );
}

export default Footer;
