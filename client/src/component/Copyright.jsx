function Copyright(props) {
    const { year, rightsHolder, rightsType } = props;

    return (
        <p className={ "copyright "}>
            &copy; { year } { rightsHolder } | { rightsType }
        </p>
    );
}

export default Copyright;
