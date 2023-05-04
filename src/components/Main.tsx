import Countries from "./Countries";
const Main = () => {
    return (
        <div className="bottom pt-[40px] grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-10 xxl:gap-0 xxl:grid-cols-4">
            <Countries />
        </div>
    );
};

export default Main;
