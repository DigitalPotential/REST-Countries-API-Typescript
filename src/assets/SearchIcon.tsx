import IonIcon from "@reacticons/ionicons";

const SearchIcon = () => {
    return (
        <IonIcon
            style={{
                color: "hsl(200, 15%, 8%)",
                position: "absolute",
                top: "15px",
                left: "60px",
                fontSize: "22px",
            }}
            name="search"
        />
    );
};

export default SearchIcon;
