import { useContext } from "react";
import ModeContext from "../context/ModeContext";
import CountriesContext from "../context/CountriesContext";
import Countries from "./Countries";
import Search from "../constants/Search";
import Filter from "../constants/Filter";
import { API_URL } from "../utils/api";
import { BsSearch } from "react-icons/bs";

const Main = () => {
    const { mode } = useContext(ModeContext);
    const { setCountries } = useContext(CountriesContext);

    const getCountryByRegion = async (regionName: string) => {
        try {
            const res = await fetch(`${API_URL}/region/${regionName}`);
            if (!res.ok) throw new Error("Failed...");
            const data = await res.json();
            setCountries(data);
        } catch (error) {
            console.error((error as Error).message);
        }
    };

    return (
        <main
            className={`${mode ? "bg-white" : "bg-dark-veryDarkBlue"} ${
                mode ? "text-light-veryDarkBlue" : "text-white"
            } px-[20px] md:px-[80px] py-[40px]`}
        >
            <div className="top flex flex-col gap-10 xxl:gap-0 xl:flex-row xl:justify-between xl:items-center">
                <div className="search relative flex flex-row">
                    {mode ? <div className="text-xl absolute mt-4 ml-3 sm:ml-12"><BsSearch /></div> : <div className="absolute mt-4 ml-3 sm:ml-12 text-xl text-white"><BsSearch /></div>}
                    <Search />
                    <button
                        className={`${
                            mode ? "bg-white" : "bg-dark-darkBlue"
                        } py-2 px-6 rounded-md shadow-lg border-0 cursor-pointer ml-3 sm:ml-10`}
                        onClick={() => window.location.reload()}
                    >
                        Reset
                    </button>
                </div>
                <Filter onSelect={getCountryByRegion} />
            </div>
            <div className="bottom min-h-[80vh] pt-[40px] grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-10 xxl:gap-0 xxl:grid-cols-4">
                <Countries />
            </div>
        </main>
    );
};

export default Main;
