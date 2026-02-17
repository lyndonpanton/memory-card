import { useState } from 'react'

import Header from "./component/Header.jsx";
import MainContent from "./component/MainContent.jsx";
import Footer from "./component/Footer.jsx";

function App() {
    const APP_NAME = "Memory Card Game";

    return (
        <>
            <Header appName={ APP_NAME } />
            <MainContent />
            <Footer />
        </>
    );
}

export default App;
