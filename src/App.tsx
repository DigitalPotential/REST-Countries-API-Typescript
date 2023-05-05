import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./context/CountriesContext";
import { ModeProvider } from "./context/ModeContext";
import CountryInfo from "./components/CountryInfo";

function App() {
    return (
        <CountriesProvider>
            <ModeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route
                            path="/country/:countryName"
                            element={<CountryInfo />}
                        />
                    </Routes>
                </BrowserRouter>
            </ModeProvider>
        </CountriesProvider>
    );
}

export default App;
