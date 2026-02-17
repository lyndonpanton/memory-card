import { useState } from 'react'

import Header from "./component/Header.jsx";
import MainContent from "./component/MainContent.jsx";

function App() {
    const appName = "Memory Card Game";

    return (
        <>
            <Header appName={ appName } />
            <MainContent />
        </>
    );
}

export default App
