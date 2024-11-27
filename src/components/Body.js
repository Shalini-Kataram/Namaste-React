import React, { useState } from "react";
import ResturantCard from "./ResturantCard";
import mockData from "../utils/mockData";

const Body = () => {
    const [listOfResturants, setListOfResturants] = useState(mockData);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filtered = listOfResturants.filter(
                            (res) => res.avgRating > 4.3
                        );
                        console.log(filtered);
                        setListOfResturants(filtered);
                    }}>
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {listOfResturants.map((rescard) => (
                    <ResturantCard key={rescard.id} resData={rescard} />
                ))}
            </div>
        </div>
    );
};

export default Body;
