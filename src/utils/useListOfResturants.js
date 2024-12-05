import { useState, useEffect } from "react";

const useListOfResturants = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);

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

    return [
        listOfResturants,
        filteredResturant,
        setListOfResturants,
        setFilteredResturant,
    ];
};

export default useListOfResturants;
