import ResturantCard from "./ResturantCard";
import mockData from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {mockData.map((rescard) => (
                    <ResturantCard key={rescard.id} resData={rescard} />
                ))}
            </div>
        </div>
    );
};

export default Body;
