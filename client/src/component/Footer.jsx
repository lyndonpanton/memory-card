function Footer() {
    const YEAR = new Date().getFullYear();
    const RIGHTS_HOLDER = "Lyndon Mykal Panton";
    const RIGHTS_TYPE = "All Rights Reserved";

    return (
        <footer>
            <article>
                ...project links
            </article>
            <article>
                ...data links
            </article>
            <p>&copy; { YEAR } { RIGHTS_HOLDER } | { RIGHTS_TYPE }</p>
        </footer>
    );
}

export default Footer;
