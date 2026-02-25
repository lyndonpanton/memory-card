import "../styles/Dialog.css";

function Dialog({ isInPlay, hasWon, hasLost, gameSummary }) {
    // let summary = <p className={ "dialog-summary" }></p>;
    // let summary = document.createElement("p");
    // summary.classList.add("dialog-summary");

    // for (let i = 0; i < gameSummary.length; i++) {
    //     let summaryItem = document.createElement("span");
    //     summaryItem.classList.add("dialog-summary-item");
        
    //     if (i === gameSummary.length - 1) {
    //         summaryItem.textContent = gameSummary[i];
    //     } else {
    //         summaryItem.textContent = gameSummary[i] + ", ";
    //     }

    //     summary.appendChild(summaryItem);
    // }

    let summary = [];

    for (let i = 0; i < gameSummary.length; i++) {
        summary.push(gameSummary[i]);
    }

    return (
        isInPlay
            ? null
            : (
                <article className={ "dialog" }>
                    <h3 className={ "dialog-status" }>
                        { hasWon ? "You Win" : "You Lose" }
                    </h3>
                    <span className={ "dialog-summary-heading" }>Pick Order: </span>
                    {
                        summary.map(function (pick, index) {
                            if (index === summary.length - 1) {
                                return (
                                    !hasWon
                                    ?
                                        <span>
                                            <span className={ "dialog-summary-item dialog-summary-item-duplicate" }>
                                                { pick }
                                            </span>
                                        </span>
                                    :
                                        <span>
                                            <span className={ "dialog-summary-item" }>
                                                { pick }
                                            </span>
                                        </span>
                                );
                            } else if (pick === summary[summary.length - 1]) {
                                return (
                                    !hasWon
                                    ?
                                        <span>
                                            <span className={ "dialog-summary-item dialog-summary-item-duplicate" }>
                                                { pick }
                                            </span>
                                            <span className={ "dialog-summary-item dialog-summary-item-dividier"}> &gt; </span>
                                        </span>
                                    :
                                        <span>
                                            <span className={ "dialog-summary-item" }>
                                                { pick }
                                            </span>
                                                <span className={ "dialog-summary-item dialog-summary-item-dividier"}> &gt; </span>
                                        </span>
                                );
                            }

                            return (
                                <span>
                                    <span className={ "dialog-summary-item" }>
                                        { pick }
                                    </span>
                                    <span className={ "dialog-summary-item dialog-summary-item-dividier"}> &gt; </span>
                                </span>
                            );
                        })
                    }
                </article>
            )
    );
}

export default Dialog;
