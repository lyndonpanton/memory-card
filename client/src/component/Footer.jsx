import ProjectLinks from "./ProjectLinks.jsx";
import DataLinks from "./DataLinks.jsx";
import Copyright from "./Copyright.jsx";

function Footer() {
    const COPYRIGHT_YEAR = new Date().getFullYear();
    const COPYRIGHT_RIGHTS_HOLDER = "Lyndon Mykal Panton";
    const COPYRIGHT_RIGHTS_TYPE = "All Rights Reserved";

    return (
        <footer>
            <article>
                ...project links
            </article>
            <article>
                ...data links
            </article>
            <Copyright
                year={ COPYRIGHT_YEAR }
                rightsHolder={ COPYRIGHT_RIGHTS_HOLDER }
                rightsType={ COPYRIGHT_RIGHTS_TYPE } />
        </footer>
    );
}

export default Footer;
