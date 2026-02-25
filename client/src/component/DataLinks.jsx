import "../styles/DataLinks.css";

function DataLinks({ data }) {
    return (
        <section className={ "data-links" }>
            {
                data.map(function (group) {
                    return (
                        <ul
                                key={ group.title }
                                className={ "data-links-" + group.title + " " + "data-links-list"}>
                            {
                                group.data.map(function (website) {
                                    return (
                                        <li key={ website.title } className={ "data-links-item" }>
                                            <a
                                                    href={ website.link }
                                                    target={ website.newTab ? "_blank" : "_self" }
                                                    className={ "data-links-link" }>
                                                
                                                {
                                                    website.usesIcon
                                                        ? <img
                                                                className={ "data-links-icon" }
                                                                src={ website.icon }
                                                                alt={ website.title } />
                                                        : website.title
                                                }
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    );
                })
            }
        </section>
    )
}

export default DataLinks;
