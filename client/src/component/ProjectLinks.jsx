import "../styles/ProjectLinks.css";

function ProjectLinks(props) {
    return (
        <section className={ "project-links" }>
            {
                props.data.map(function (item) {
                    return (
                        <ul key={ item.title } className={ "project-link-list" }>
                            <li className={ "project-link-list-title" }>{ item.title }</li>
                            
                            {
                                item.data.map(function (item) {
                                    return (
                                        <li key={ item.title } className={ "project-link-list-item" }>
                                            <a
                                                    href={ item.link }
                                                    target={ "_blank" }
                                                    className={ "project-link-list-link" }>
                                                { item.title }
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    )
                })
            }
        </section>
    );
}

export default ProjectLinks;
