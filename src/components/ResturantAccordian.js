import { useState } from "react";
import ItemList from "./ItemList";

const ResturantAccordian = ({ data }) => {
    const [showStatus, setShowStatus] = useState(false);

    const handleClick = () => {
        setShowStatus(!showStatus);
    };

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div
                className="flex justify-between cursor-pointer"
                onClick={handleClick}>
                <span className="font-bold text-xl ">
                    {data.title}({data.itemCards.length})
                </span>
                <span>⌄</span>
            </div>
            {showStatus && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default ResturantAccordian;
