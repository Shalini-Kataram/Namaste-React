const ResturantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
        resData;
    return (
        <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg">
            <img
                className="w-full h-40 rounded-lg object-cover"
                alt="res-logo"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="text-gray-600 text-sm ">{cuisines.join(", ")}</h4>
            <div className="flex justify-between items-center mt-2">
                <h4 className="text-sm font-semibold">{avgRating} stars</h4>
                <h4 className="text-sm text-gray-500">{deliveryTime} mins</h4>
            </div>
        </div>
    );
};

export const withPromotedValue = (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Prompted
                </label>
                <ResturantCard {...props} />
            </div>
        );
    };
};

export default ResturantCard;
