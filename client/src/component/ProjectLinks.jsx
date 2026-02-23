import "../styles/ProjectLinks.css";

function ProjectLinks(props) {
    return (
        <section>
            {
                props.data.map(function (item) {
                    return (
                        <ul key={ item.title }>
                            <li>{ item.title }</li>
                            
                            {
                                item.data.map(function (item) {
                                    return (
                                        <li key={ item.title }>
                                            <a href={ item.link }>{ item.title }</a>
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
