/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData)
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className='res-logo rounded-lg' src={CDN_URL + resData?.info?.cloudinaryImageId} alt="res-logo" />
            <h3 className="text-lg font-bold py-4">{resData?.info?.name}</h3>
            <h4>{resData?.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} Minutes</h4>
        </div>
    )
}

//Higher Order Components
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white mx-4 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard;