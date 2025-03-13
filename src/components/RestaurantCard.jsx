import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg" style={{ backgroundColor: "#f0f0f0f0" }}>
            <img className='res-logo rounded-lg' src={CDN_URL + resData?.info?.cloudinaryImageId} alt="res-logo" />
            <h3 className="text-lg font-bold py-4">{resData?.info?.name}</h3>
            <h4>{resData?.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} Minutes</h4>
        </div>
    )
}


export default RestaurantCard;