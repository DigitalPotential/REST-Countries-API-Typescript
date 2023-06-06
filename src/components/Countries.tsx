import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../context/CountriesContext";
import ModeContext from "../context/ModeContext";
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import {BsFillArrowUpCircleFill} from "react-icons/bs";


const Countries = () => {
    const { countries } = useContext(CountriesContext);
    const { isLoading } = useContext(CountriesContext);
    const { mode } = useContext(ModeContext);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <motion.div
                className={`${mode ? "progress-bar-dark" : "progress-bar"}`}
                style={{ scaleX }}
            />
            {isLoading ? (
                <div className="w-[100px] min-h-screen mt-[200px] font-[800]">
                    <h2 className="text-3xl tracking-widest">Loading...</h2>
                </div>
            ) : (
                Array.isArray(countries) &&
                countries.map((country, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Link
                                to={`/country/${country.name.common}`}
                                className="w-full sm:w-[300px] rounded-lg shadow-lg cursor-pointer mb-[80px]"
                                key={index}
                            >
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        translateX: -500,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        translateX: 0,
                                    }}
                                    transition={{
                                        delay: 0.5,
                                        x: { duration: 1 },
                                        default: { ease: "linear" },
                                    }}
                                    whileHover={{
                                        translateY: -10,
                                    }}
                                >
                                    <div className="image h-[200px] w-[100%]">
                                        <img
                                            className="h-[100%] w-[100%] object-cover block rounded-t-lg"
                                            src={country.flags.svg}
                                            alt="flag"
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            mode
                                                ? "bg-white"
                                                : "bg-dark-darkBlue"
                                        } text min-h-[200px] pl-5 rounded-b-lg`}
                                    >
                                        <h2 className="font-[600] text-xl py-6">
                                            {country.name.common}
                                        </h2>
                                        <div className="space-y-2">
                                            <p>
                                                <span className="font-[600]">
                                                    Population:{" "}
                                                </span>{" "}
                                                {country.population.toLocaleString()}
                                            </p>
                                            <p>
                                                <span className="font-[600]">
                                                    Region:{" "}
                                                </span>
                                                {country.region}
                                            </p>
                                            <p>
                                                <span className="font-[600]">
                                                    Capital:{" "}
                                                </span>{" "}
                                                {country.capital}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </React.Fragment>
                    );
                })
            )}
            {mode ? (
                <ScrollToTop
                    top={20}
                    smooth
                    style={{
                        marginRight: "20px",
                        zIndex: "10",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                    }}
                    component={
                        <BsFillArrowUpCircleFill
                            style={{ color: "black", fontSize: "4rem" }}
                        />
                    }
                />
            ) : (
                <ScrollToTop
                    top={20}
                    smooth
                    style={{
                        marginRight: "20px",
                        zIndex: "10",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                    }}
                    component={
                        <BsFillArrowUpCircleFill
                            style={{ color: "white", fontSize: "4rem" }}
                            name="caret-up-circle-outline"
                        />
                    }
                />
            )}
        </>
    );
};

export default Countries;
