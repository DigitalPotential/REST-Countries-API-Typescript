import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./context/CountriesContext";
import { ModeProvider } from "./context/ModeContext";

function App() {
    return (
        <CountriesProvider>
            <ModeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />} />
                    </Routes>
                </BrowserRouter>
            </ModeProvider>
        </CountriesProvider>
    );
}

export default App;
