import React, {
    createContext,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import { API_URL } from "../utils/api";
import { Country } from "../types/CountryAPI";

interface CountriesContextInterface {
    countries: Country[];
    setCountries: Dispatch<SetStateAction<Country[]>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const CountriesContext = createContext<CountriesContextInterface>({
  countries: [],
  setCountries: () => {},
  isLoading: true,
  setIsLoading: () => {},
});

export const CountriesProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchCountries = async () => {
            try {
                const response = await fetch(`${API_URL}/all`);
                const data = await response.json();
                console.log(data);
                if (isMounted) {
                    setCountries(data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
        console.log(isLoading)
        fetchCountries();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <CountriesContext.Provider
            value={{ countries, setCountries, isLoading, setIsLoading }}
        >
            {children}
        </CountriesContext.Provider>
    );
};

export default CountriesContext;
