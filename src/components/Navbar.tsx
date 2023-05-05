import { useContext } from "react";
import { Link } from "react-router-dom";
import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";
import ModeContext from "../context/ModeContext";

const Navbar = () => {
  const { mode, setMode } = useContext(ModeContext);

  const handleMode = () => {
    setMode((prev) => !prev);
  };

  return (
    <nav
      className={`${mode ? "bg-white" : "bg-dark-darkBlue"} ${
        mode ? "text-light-veryDarkBlue" : "text-white"
      } px-[20px] sm:px-[80px] py-[25px] flex justify-between items-center sticky top-0 left-0 w-[100%] z-10 shadow-md`}
    >
      <div className="left">
        <Link to="/" className="sm:text-2xl font-[800]">Where in the world?</Link>
      </div>
      <div
        onClick={handleMode}
        className="right flex items-center space-x-3 cursor-pointer"
      >
        {mode ? (
          <>
            <MoonIcon />
            <p className="font-[800]">Dark Mode</p>
          </>
        ) : (
          <>
            <SunIcon />
            <p className="font-[600]">Light Mode</p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
