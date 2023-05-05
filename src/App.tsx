import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./context/CountriesContext";
import { ModeProvider } from "./context/ModeContext";
import CountryInfo from "./components/CountryInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <CountriesProvider>
            <ModeProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route
                            path="/country/:countryName"
                            element={<CountryInfo />}
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </ModeProvider>
        </CountriesProvider>
    );
}

export default App;
