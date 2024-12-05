import React, { useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useListOfResturants from "../utils/useListOfResturants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [searchInput, setSearchInput] = useState("");

    const [
        listOfResturants,
        filteredResturant,
        setListOfResturants,
        setFilteredResturant,
    ] = useListOfResturants();

    const handleClick = () => {
        const filtered = listOfResturants.filter((res) =>
            res?.card?.card?.info.name
                .toLowerCase()
                .includes(searchInput.toLowerCase())
        );

        setFilteredResturant(filtered);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Ooops!! Something wrong with your internet connection!!!</h1>
        );
    }
    return listOfResturants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        name="search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button onClick={handleClick}>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filtered = listOfResturants.filter(
                            (res) => res?.card?.card?.info?.avgRating > 4.2
                        );
                        setListOfResturants(filtered);
                    }}>
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {filteredResturant.map((rescard) => (
                    <Link
                        key={rescard?.card?.card?.info?.id}
                        to={"/resturant/" + rescard?.card?.card?.info?.id}>
                        <ResturantCard resData={rescard?.card?.card?.info} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
