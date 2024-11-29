import React, { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "../components/Shimmer";

const Body = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
        const result = await data.json();
        const filtered = result.data.cards.filter(
            (card) => card?.card?.relevance && card?.card
        );
        setListOfResturants(filtered);
        setFilteredResturant(filtered);
    };

    const handleClick = () => {
        const filtered = listOfResturants.filter((res) =>
            res?.card?.card?.info.name
                .toLowerCase()
                .includes(searchInput.toLowerCase())
        );

        setFilteredResturant(filtered);
    };

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
                            (res) => res?.card?.card?.info?.avgRating > 4.3
                        );
                        setListOfResturants(filtered);
                    }}>
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {filteredResturant.map((rescard) => (
                    <ResturantCard
                        key={rescard?.card?.card?.info?.id}
                        resData={rescard?.card?.card?.info}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
