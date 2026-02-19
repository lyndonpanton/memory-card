import "../styles/Copyright.css";

function Copyright(props) {
    const { year, rightsHolder, rightsType } = props;

    return (
        <p className={ "copyright "}>
            <span className={ "copyright-symbol" }>&copy; </span>
            <span className={ "copyright-year" }>{ year } </span>
            <span className={ "copyright-rights-holder" }> { rightsHolder }</span>
            <span className={ "copyright-rights-divider" }> |</span>
            <span className={ "copyright-rights-type" }> { rightsType }</span>
        </p>
    );
}

export default Copyright;
