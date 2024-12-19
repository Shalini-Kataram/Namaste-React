import React, { useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useListOfResturants from "../utils/useListOfResturants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedValue } from "./ResturantCard";

const Body = () => {
    const [searchInput, setSearchInput] = useState("");

    const ResturantWithPrompted = withPromotedValue(ResturantCard);

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
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        name="search"
                        className="border border-solid border-black"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-green-50 m-4 rounded-lg"
                        onClick={handleClick}>
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-50 rounded-lg"
                        onClick={() => {
                            const filtered = listOfResturants.filter(
                                (res) => res?.card?.card?.info?.avgRating > 4.2
                            );
                            setListOfResturants(filtered);
                        }}>
                        Top Rated Resturants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredResturant.map((rescard) => (
                    <Link
                        key={rescard?.card?.card?.info?.id}
                        to={"/resturant/" + rescard?.card?.card?.info?.id}>
                        {rescard?.card?.card?.info?.promoted ? (
                            <ResturantWithPrompted
                                resData={rescard?.card?.card?.info}
                            />
                        ) : (
                            <ResturantCard
                                resData={rescard?.card?.card?.info}
                            />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
