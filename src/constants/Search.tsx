import { useContext, useState } from "react";
import ModeContext from "../context/ModeContext";
import CountriesContext from "../context/CountriesContext";
import { API_URL } from "../utils/api";
import { motion } from "framer-motion";

const Search = () => {
    const { mode } = useContext(ModeContext);
    const { setCountries } = useContext(CountriesContext);
    const [input, setInput] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formElement = event.currentTarget;

        try {
            const response = await fetch(`${API_URL}/name/${input}`);
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.log(error);
        }

        if(document.contains(formElement)) {
            formElement.reset();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <motion.input
                whileFocus={{ scale: 1.1 }}
                className={`${
                    mode ? "bg-white" : "bg-dark-darkBlue"
                }  font-[600] px-10 sm:px-[100px] py-[15px] w-[100%] md:w-[500px] rounded-md shadow-lg focus:outline-0`}
                type="text"
                name="name"
                placeholder="Search for a country..."
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
};

export default Search;
