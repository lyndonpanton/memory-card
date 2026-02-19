import "./styles/App.css";

import Header from "./component/Header.jsx";
import MainContent from "./component/MainContent.jsx";
import Footer from "./component/Footer.jsx";

function App() {
    const APP_NAME = "Pokémon Memory Card Game";
    
    return (
        <>
            <Header appName={ APP_NAME } />
            <MainContent />
            <Footer />
        </>
    );
}

export default App;
