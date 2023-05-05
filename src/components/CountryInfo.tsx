import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Arrow from "../assets/Arrow";
import ArrowWhite from "../assets/ArrowWhite";
import ModeContext from "../context/ModeContext";
import { API_URL } from "../utils/api";
import { motion } from "framer-motion";
import { Country } from "../types/CountryAPI";

const CountryInfo = () => {
    const params = useParams();
    const [country, setCountry] = useState<Country[]>([]);

    const value = Object.values(params);
    const singleCountry = value[0];

    const { mode } = useContext(ModeContext);

    useEffect(() => {
        const getCountryByName = async () => {
            try {
                const res = await fetch(`${API_URL}/name/${singleCountry}`);
                if (!res.ok) throw new Error("Could not found!");

                const data = await res.json();
                setCountry(data);
            } catch (error) {
                console.error((error as Error).message);
            }
        };

        getCountryByName();
    }, [singleCountry]);

    return (
        <>
            <div
                className={`${mode ? "bg-white" : "bg-dark-veryDarkBlue"} ${
                    mode ? "text-light-veryDarkBlue" : "text-white"
                } px-[25px] lg:px-[80px] py-[40px] lg:h-[100vh] flex flex-col lg:flex-row lg:items-center lg:gap-[150px]`}
            >
                {country.map((item, index) => {
                    return (
                        <>
                            <div className="img lg:w-[600px] lg:h-[500px] space-y-20">
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    onHoverStart={(e) => {}}
                                    onHoverEnd={(e) => {}}
                                >
                                    <Link
                                        to="/"
                                        className={`${
                                            mode
                                                ? "bg-white"
                                                : "bg-dark-darkBlue"
                                        } py-2 px-10 rounded-md shadow-lg border-0 cursor-pointer`}
                                    >
                                        {mode ? <Arrow /> : <ArrowWhite />}
                                        Back
                                    </Link>
                                </motion.button>
                                <motion.img
                                    initial={{
                                        opacity: 0,
                                        translateX: -500,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        translateX: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        translateX: -500,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        translateX: -500,
                                    }}
                                    className="w-[100%] h-[300px] object-cover block"
                                    src={item.flags.svg}
                                    alt=""
                                />
                            </div>
                            <div className="info mt-[50px] lg:mt-[100px] h-[400px] lg:w-[500px] flex flex-col justify-evenly">
                                <h1 className="text-2xl mt-10 lg:mt-0 lg:text-3xl font-[800]">
                                    {item.name.common}
                                </h1>
                                <div className="country-info flex flex-col lg:flex-row lg:justify-between">
                                    <div className="left space-y-2 my-8">
                                        <p>
                                            Native Name:{" "}
                                            <span className="text-light-darkGray">
                                                {item.nativeName}
                                            </span>
                                        </p>
                                        <p>
                                            Population:{" "}
                                            <span className="text-light-darkGray">
                                                {item.population.toLocaleString()}
                                            </span>
                                        </p>
                                        <p>
                                            Region:{" "}
                                            <span className="text-light-darkGray">
                                                {item.region}
                                            </span>
                                        </p>
                                        <p>
                                            Sub Region:{" "}
                                            <span className="text-light-darkGray">
                                                {item.subregion}
                                            </span>
                                        </p>
                                        <p>
                                            Capital:{" "}
                                            <span className="text-light-darkGray">
                                                {item.capital}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="right space-y-2">
                                        <p>
                                            Top Level Domain:{" "}
                                            <span className="text-light-darkGray">
                                                {item.topLevelDomain}
                                            </span>
                                        </p>
                                        <p>
                                            Currencies:{" "}
                                            <span className="text-light-darkGray">
                                                {item.currencies?.[0]?.name || "N/A"}
                                            </span>
                                        </p>
                                        <p>
                                            Languages:{" "}
                                            <span className="text-light-darkGray">
                                                {item.languages?.[0]?.name || "N/A"}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="borders space-x-2 mb-12 mt-6 lg:mb-0 flex items-center flex-wrap">
                                    <p className="mt-2">Border Countries:</p>
                                    {item.borders?.length ? (
                                        item.borders.map((country, index) => (
                                            <Link
                                                key={index}
                                                className={`${
                                                    mode
                                                        ? "bg-white"
                                                        : "bg-dark-darkBlue"
                                                } text-[12px] py-2 px-4 lg:px-8 mt-2 rounded-md shadow-lg cursor-pointer`}
                                                to={`/`}
                                            >
                                                <span> {country} </span>
                                            </Link>
                                        ))
                                    ) : (
                                        <p className="mt-2 lg:text-2xl">
                                            No borders...
                                        </p>
                                    )}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default CountryInfo;
