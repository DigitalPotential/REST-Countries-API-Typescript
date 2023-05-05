import { useContext } from "react";
import ModeContext from "../context/ModeContext";

interface FilterProps {
    onSelect: (regionName: string) => void;
  }
  
const Filter = ({ onSelect }: FilterProps) => {
  const { mode } = useContext(ModeContext);

  const selectType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const regionName = event.target.value;
    onSelect(regionName);
  };

  return (
    <>
      <select
        onChange={selectType}
        className={`${
          mode ? "bg-white" : "bg-dark-darkBlue"
        } w-[250px] px-[30px] py-[15px] outline-0 rounded-md shadow-lg border-0 cursor-pointer hover:opacity-50`}
        name="filter"
      >
        <option>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
};

export default Filter;
