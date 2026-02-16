import { useState } from 'react'

import Header from "./component/Header.jsx";

function App() {
    const appName = "Memory Card Game";

    return (
        <Header appName={ appName } />
    );
}

export default App
